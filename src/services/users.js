import axios from "axios";
import setAuthToken from "../global/setAuthToken";
import store from "store";
import { history } from "..";
export async function login(contact1, password1) {
  const value = { username: contact1, password: password1 };
  let authorized1 = false;
  return axios
    .post(`/token-auth/`, value)
    .then((response) => {
      if (response.status === 200) {
        authorized1 = true;
        // const expirationDate = new Date(new Date().getTime() + 3600 * 10000);
        localStorage.setItem("token", response.data.access);
        // store.set("user", response.data.user);

        // localStorage.setItem("expirationDate", expirationDate);

        setAuthToken(response.data.access);
        // console.log(this.props);
        // setCart(response.data.user.id);
        return {
          id: response.data.user.id,
          authorized: authorized1,
          contact: response.data.user.conatct,
          role: response.data.user.roles,
          email: response.data.user.email,
          token: response.data.token,
        };
      } else if (response.status !== 200) {
        console.log(response);
        // toast(JSON.stringify(response.data.non_field_errors), {
        //   type: "error",
        //   autoClose: 2000,
        // });
      }
    })
    .catch((error) => {
      console.log(error);
      //   toast("Invalid Credential", { type: "error", autoClose: 2000 });
      // notification.warning({
      //   message: error.code,
      //   description: error.message,
      // });
    });
}

export async function currentAccount() {
  let authorized1 = false;
  return axios
    .get(`/api/current_user/`)
    .then((response) => {
      history.push("/");
      authorized1 = true;
      const { data } = response;
      return {
        id: data.id,
        authorized: authorized1,
        contact: data.contact,
        role: data.roles,
        email: data.email,
        token: localStorage.getItem("token"),
        // avatar: data.image,
      };
    })
    .catch((error) => {
      // notification.warning({
      //   message: 'Invalid Token Id or Session is Lost',
      //   description: error.message,
      // })
    });
}

export async function logout() {
  setAuthToken("");
  window.localStorage.clear();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
