/**
 *  APP TYPES
 */

// Reducer Action type with mandatory type and optional payload

export interface IAction {
  type?: string;
  payload?: any;
}

// Loading spinner types

export interface ILoading {
  text: string;
  status: boolean;
}

// App Messages Types

export interface IMessage {
  message: string;
  type: string;
  details?: any;
}

export interface IAppLoading {
  app: ILoading;
  albums?: ILoading;
}
// App reducer initial state

export interface IAppState {
  loading: IAppLoading;
  messages: IMessage[];
}

// Data Reducers interface
export interface IDataState {
  artists: any;
}

// Redux State

export interface IReduxState {
  app: IAppState;
  data: IDataState;
}

// IPropsSearch

export interface IPropsSearch {
  getSearch(search: string): any;
}
