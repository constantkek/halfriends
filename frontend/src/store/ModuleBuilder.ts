import { ActionContext, Module, Store } from 'vuex';
import { RootState } from '@/store/rootState';
import { noop } from 'vue-class-component/lib/util';

export class ModuleBuilder<TRootState = RootState, TModuleState = unknown> {
  private context: object = {};
  private readonly module: Module<TModuleState, TRootState>;

  constructor(
    private readonly rootStore: Store<TRootState>,
    module: Module<TModuleState, TRootState>,
    private readonly namespace: string,
  ) {
    this.module = {
      ...module,
      namespaced: true,
    }
    this.rootStore.registerModule(this.namespace, this.module);
  }

  public build<T>(config: T): T {
    return Object.assign(this.context, config);
  }

  public action<TArgs extends unknown[]>(
    action: (context: ActionContext<TModuleState, TRootState>, ...args: TArgs) => Promise<unknown>
  ): (...args: TArgs) => Promise<unknown> {
    return (...args) => this.rootStore.dispatch(`${this.namespace}/${action.name}`, ...args);
  }

  public mutation<TArgs extends unknown[]>(
    mutation: (state: TModuleState, ...args: TArgs) => void,
  ): (...args: TArgs) => void {
    return (...args) => this.rootStore.commit(`${this.namespace}/${mutation.name}`, ...args);
  }

  public getter<TArgs extends unknown[]>(
    getter: (state: TModuleState, ...args: TArgs) => unknown,
  ): ReturnType<(...args: never[]) => void> {
    Object.defineProperty(this.context, getter.name, {
      get: () => {
        return this.rootStore.getters[`${this.namespace}/${getter.name}`];
      },
      set: () => { noop() },
    });
    return this.rootStore.getters[`${this.namespace}/${getter.name}`];
  }
}