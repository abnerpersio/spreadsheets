export abstract class UseCase<Data = Record<string, unknown>> {
  abstract execute(params: Data): Promise<void>;
}
