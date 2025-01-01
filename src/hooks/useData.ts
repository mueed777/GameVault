// No longer need useData file - replaced with react query to fetch data from backend

// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: any[]
// ) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(
//     () => {
//       const controller = new AbortController();

//       setLoading(true);
//       apiClient
//         .get<FetchResponse<T>>(endpoint, {
//           signal: controller.signal,
//           ...requestConfig,
//         })
//         .then((response) => {
//           setData(response.data.results);
//           setLoading(false);
//           console.log(response.data.results);
//         })
//         .catch((error) => {
//           if (error instanceof CanceledError) {
//             return;
//           }
//           setError(error.message + "! ");
//           setLoading(false);
//         });
//       return () => controller.abort();
//     },
//     deps ? [...deps] : []
//   );

//   return { data, error, isLoading };
// };

// export default useData;

export {};
