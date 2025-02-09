#!/bin/bash

cat ./src/compiled_contracts/operations.ts| sed  -e 's/: MessageFns/: OperationsUtils.MessageFns/g' -e  's/interface MessageFns.*/export declare namespace OperationsUtils {\n export &/g' | sed -e $'$a\\\n}' > ./src/compiled_contracts/operations.ts_sed
cat ./src/compiled_contracts/orders.ts| sed  -e 's/: MessageFns/: OrdersUtils.MessageFns/g' -e  's/interface MessageFns.*/export declare namespace OrdersUtils {\n export &/g' | sed -e $'$a\\\n}' > ./src/compiled_contracts/orders.ts_sed
cat ./src/compiled_contracts/users.ts| sed  -e 's/: MessageFns/: UsersUtils.MessageFns/g' -e  's/interface MessageFns.*/export declare namespace UsersUtils {\n export &/g' | sed -e $'$a\\\n}' > ./src/compiled_contracts/users.ts_sed
sed  's/as public/as tpublic/' ./src/compiled_contracts/index.tinkoff.ts > ./src/compiled_contracts/index.tinkoff.ts_sed
mv -f ./src/compiled_contracts/operations.ts_sed ./src/compiled_contracts/operations.ts
mv -f ./src/compiled_contracts/orders.ts_sed ./src/compiled_contracts/orders.ts
mv -f ./src/compiled_contracts/users.ts_sed ./src/compiled_contracts/users.ts
mv -f ./src/compiled_contracts/index.tinkoff.ts_sed ./src/compiled_contracts/index.tinkoff.ts