export interface MetaData{

}

export interface RPCData{

}
export interface NetworkState {
  metaData: MetaData | null;
  rpcData: {
    input: RPCData | null,
    output: RPCData | null
  };
}