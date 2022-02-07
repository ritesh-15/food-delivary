import { useEffect, useState } from "react";
import { useMessage } from "..";
import { api } from "../../api/axios";

export default function useFetch(URL: string, dependencies: any[] = []) {
  const [loading, setLoading] = useState<boolean>(true);
  const [url, setUrl] = useState<string>(URL);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const { setMessage } = useMessage();

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(url);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        setMessage("Something went wrong!", true);
      }
    })();
  }, dependencies);

  return { loading, data, error };
}
