export interface UseCase<T, U> {
  execute(params?: T): Promise<U>;
}
