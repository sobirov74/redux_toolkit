/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {SetStateAction, useEffect, useState} from 'react';

type ReturnHookType<T, K> = {
  error: null | string;
  loading: boolean;
  reload: () => void;
  data?: K;
  hasMore?: boolean;
  moreLoading?: boolean;
  nextPage?: () => void;
  setData: (data: any) => SetStateAction<any>;
};
type Props<T, K> = {
  api: (args: T | AxiosRequestConfig) => Promise<AxiosResponse<K>>;
  body?: T;
  enabled?: boolean;
};

export const useApi = <T, K>({api, body, enabled = true}: Props<T, K>): ReturnHookType<T, K> => {
  const ourRequest = axios.CancelToken.source();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<T | any>(null);
  const [reload, setReload] = useState<number>(0);
  useEffect(() => {
    if (enabled) {
      const fetchData = async () => {
        api({...body, cancelToken: ourRequest.token})
          .then(({data: response}: AxiosResponse) => {
            if (response) {
              setData(response?.data);
              if (error) setError(null);
            }
          })
          .catch((error: AxiosError): void => {
            setError(error?.message || 'error');
          })
          .finally(() => {
            setLoading(false);
          });
      };
      fetchData();
      return () => {
        ourRequest.cancel();
      };
    }
  }, [reload, enabled]);

  return {error, data, loading, reload: () => setReload(reload + 1), setData};
};
export const useApiPaginate = <T, K>({api, body}: Props<T, K>): ReturnHookType<T, K> => {
  const ourRequest = axios.CancelToken.source();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [moreLoading, setMoreLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      if (page > 1) {
        setMoreLoading(true);
      }
      api({...body, cancelToken: ourRequest.token})
        .then(({data: response}: AxiosResponse) => {
          if (response) {
            if (page > 1) {
              setData([...data, ...response?.data]);
            } else {
              setData(response?.data);
            }
            setHasMore(!!response.next_page_url);
            if (error) {
              setError(null);
            }
          }
        })
        .catch((error: AxiosError) => {
          setError(error?.message || 'error');
        })
        .finally(() => {
          if (page > 1 || moreLoading) {
            setMoreLoading(false);
          }
          if (loading) {
            setLoading(false);
          }
        });
    };
    fetchData();
    return () => {
      ourRequest.cancel();
    };
  }, [page]);

  return {
    error,
    data,
    loading,
    reload: () => setPage(1),
    hasMore,
    moreLoading,
    nextPage: () => setPage(page + 1),
    setData,
  };
};
