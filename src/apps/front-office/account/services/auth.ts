import endpoint from "@mongez/http";

export function login(data: any) {
  return endpoint.post("/login", data);
}
