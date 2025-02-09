./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/compiled_contracts \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,exportCommonSymbols=false,outputIndex=true,esModuleInterop=true \
  --proto_path=./investAPI/src/docs/contracts/ \
  ./investAPI/src/docs/contracts/*.proto