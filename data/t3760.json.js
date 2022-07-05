window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3760","name":"rocketchat__trash","subtype":"COLLECTION","is_user_defined":false,"description":"","summary":[{"field":"Documentation","value":{"_type":"link","name":"rocketchat@localhost:27017","id":"d10"}},{"field":"Schema","value":"rocketchat"},{"field":"Name","value":"rocketchat__trash"},{"field":"Type","value":"Collection"}],"columns":[{"id":"column-34745","object_id":"column-34745","name":"_id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34746","object_id":"column-34746","name":"__collection__","name_without_path":"__collection__","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34747","object_id":"column-34747","name":"_deletedAt","name_without_path":"_deletedAt","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34748","object_id":"column-34748","name":"_updatedAt","name_without_path":"_updatedAt","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34749","object_id":"column-34749","name":"items","name_without_path":"items","description":"","is_pk":false,"is_identity":false,"data_type":"Document[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"DOCUMENT_ARRAY","is_user_defined":false,"children":[{"id":"column-34767","object_id":"column-34767","name":"items.type","name_without_path":"type","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items","level":2,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34768","object_id":"column-34768","name":"items.data","name_without_path":"data","description":"","is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items","level":2,"item_type":"DOCUMENT","is_user_defined":false,"children":[{"id":"column-34769","object_id":"column-34769","name":"items.data.payload","name_without_path":"payload","description":"","is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data","level":3,"item_type":"DOCUMENT","is_user_defined":false,"children":[{"id":"column-34775","object_id":"column-34775","name":"items.data.payload.sender","name_without_path":"sender","description":"","is_pk":false,"is_identity":false,"data_type":"Document","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data.payload","level":4,"item_type":"DOCUMENT","is_user_defined":false,"children":[{"id":"column-34779","object_id":"column-34779","name":"items.data.payload.sender._id","name_without_path":"_id","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data.payload.sender","level":5,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34780","object_id":"column-34780","name":"items.data.payload.sender.username","name_without_path":"username","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data.payload.sender","level":5,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34781","object_id":"column-34781","name":"items.data.payload.sender.name","name_without_path":"name","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data.payload.sender","level":5,"item_type":"FIELD","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34776","object_id":"column-34776","name":"items.data.payload.senderName","name_without_path":"senderName","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data.payload","level":4,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34777","object_id":"column-34777","name":"items.data.payload.type","name_without_path":"type","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data.payload","level":4,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34778","object_id":"column-34778","name":"items.data.payload.name","name_without_path":"name","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data.payload","level":4,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]}],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34770","object_id":"column-34770","name":"items.data.roomName","name_without_path":"roomName","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data","level":3,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34771","object_id":"column-34771","name":"items.data.username","name_without_path":"username","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data","level":3,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34772","object_id":"column-34772","name":"items.data.message","name_without_path":"message","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data","level":3,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34773","object_id":"column-34773","name":"items.data.badge","name_without_path":"badge","description":"","is_pk":false,"is_identity":false,"data_type":"Int32","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data","level":3,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34774","object_id":"column-34774","name":"items.data.category","name_without_path":"category","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"items.data","level":3,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]}],"custom_fields":{},"linked_terms":[],"references":[]}],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34750","object_id":"column-34750","name":"mid","name_without_path":"mid","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34751","object_id":"column-34751","name":"rid","name_without_path":"rid","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34752","object_id":"column-34752","name":"sending","name_without_path":"sending","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34753","object_id":"column-34753","name":"ts","name_without_path":"ts","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34754","object_id":"column-34754","name":"uid","name_without_path":"uid","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34755","object_id":"column-34755","name":"username","name_without_path":"username","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34756","object_id":"column-34756","name":"type","name_without_path":"type","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34757","object_id":"column-34757","name":"active","name_without_path":"active","description":"","is_pk":false,"is_identity":false,"data_type":"Boolean","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34758","object_id":"column-34758","name":"name","name_without_path":"name","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34759","object_id":"column-34759","name":"roles","name_without_path":"roles","description":"","is_pk":false,"is_identity":false,"data_type":"String[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"ARRAY","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34760","object_id":"column-34760","name":"status","name_without_path":"status","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34761","object_id":"column-34761","name":"createdAt","name_without_path":"createdAt","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34762","object_id":"column-34762","name":"appId","name_without_path":"appId","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34763","object_id":"column-34763","name":"avatarETag","name_without_path":"avatarETag","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34764","object_id":"column-34764","name":"avatarOrigin","name_without_path":"avatarOrigin","description":"","is_pk":false,"is_identity":false,"data_type":"String","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34765","object_id":"column-34765","name":"__rooms","name_without_path":"__rooms","description":"","is_pk":false,"is_identity":false,"data_type":"Null[]","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"ARRAY","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34766","object_id":"column-34766","name":"schedule","name_without_path":"schedule","description":"","is_pk":false,"is_identity":false,"data_type":"DateTime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":"","level":1,"item_type":"FIELD","is_user_defined":false,"children":[],"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"_id","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":"","name_without_path":"_id","name":"_id"},{"path":"","name_without_path":"_id","name":"_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2022-07-05 13:15"};