import { useMemo } from 'react';
import { ApiService } from '../services/api.service';

export const useApi = () => {
  const api = useMemo(() => new ApiService(), []);

  return api;
};
