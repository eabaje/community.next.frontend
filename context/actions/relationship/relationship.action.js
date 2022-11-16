import {
  CREATE_FRIEND_FAIL,
  CREATE_FRIEND_REQUEST,
  CREATE_FRIEND_SUCCESS,
  GET_FRIENDS_FAIL,
  GET_FRIENDS_REQUEST,
  GET_FRIENDS_SUCCESS,
  EDIT_FRIEND_FAIL,
  EDIT_FRIEND_REQUEST,
  EDIT_FRIEND_SUCCESS,
  DELETE_FRIEND_FAIL,
  DELETE_FRIEND_REQUEST,
  DELETE_FRIEND_SUCCESS,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";

export const getFRIENDs = () => (dispatch) => (onSuccess) => (onError) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });

  axios
    .get(`/user/getAllFriend/`)
    .then((res) => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
      //  console.log(`res.data`, res.data);
      onSuccess(res.data);
    })

    .catch((err) => {
      const message = err.response ? err.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_FRIENDS_FAIL, payload: message });
      onError(message);
    });
};

export const listFRIENDByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_FRIENDS_FAIL, payload: err.message });
  }
};

export const listFRIENDsByFRIENDId = (userId) => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/user/findOne/${userId}`);
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_FRIENDS_FAIL, payload: err.message });
  }
};

export const listFRIENDsByName = (name) => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/user/findAllBySearch/${name}`);
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_FRIENDS_FAIL, payload: err.message });
  }
};

export const listFRIENDsByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/user/findAllProfilesByDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_FRIENDS_FAIL, payload: err.message });
  }
};

export const createFRIEND =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      FRIENDId: form.FRIENDId || "",
      FirstName: form.FirstName || "",
      LastName: form.LastName || "",
      FullName: form.FirstName + " " + form.LastName,
      Email: form.Email || "",
      Phone: form.Phone || "",
      Address: form.Address || "",
      City: form.City || "",
      Country: form.Country || "",
      FRIENDPicUrl: form.FRIENDPicUrl || null,
    };

    dispatch({ type: CREATE_FRIEND_REQUEST });

    axios
      .post(`/user/create/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_FRIEND_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((err) => {
        const message =
          err.message && err.response.data.message
            ? err.response.data.message
            : err.response.data.message;
        dispatch({ type: CREATE_FRIEND_FAIL, payload: message });
        onError(message);
      });
  };

export const editFRIEND =
  (form, userId) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      FRIENDId: form.FRIENDId || "",
      FRIENDId: form.FRIENDId || "",
      FirstName: form.FirstName || "",
      LastName: form.LastName || "",
      FullName: form.FirstName + " " + form.LastName,
      Email: form.Email || "",
      Phone: form.Phone || "",
      Address: form.Address || "",
      City: form.City || "",
      Country: form.Country || "",
      FRIENDPicUrl: form.FRIENDPicUrl || null,
    };

    dispatch({ type: EDIT_FRIEND_REQUEST });

    axios
      .put(`/user/update/`, form)

      .then((res) => {
        dispatch({
          type: EDIT_FRIEND_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({ type: CREATE_FRIEND_FAIL, payload: message });
        onError(message);
      });
  };

export const deleteFRIEND = (userId) => async (dispatch) => {
  const requestPayload = {
    ProfileId: userId,
  };

  dispatch({ type: DELETE_FRIEND_REQUEST });

  try {
    const { res } = await axios.delete(`/user/delete/${userId}`);

    dispatch({
      type: DELETE_FRIEND_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const message =
      err.message && err.response.data.message
        ? err.response.data.message
        : err.response.data.message;
    dispatch({ type: DELETE_FRIEND_FAIL, payload: message });
  }
};

//Section  FRIEND Subscription

export const listFRIENDSubscriptionByEndDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_FRIENDS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/findAllFRIENDSubscriptionsByEndDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    } catch (err) {
      const message =
        err.message && err.response.data.message
          ? err.response.data.message
          : err.response.data.message;
      dispatch({ type: GET_FRIENDS_FAIL, payload: message });
    }
  };

export const subcribeFRIEND =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      FRIENDId: form.FRIENDId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.Phone || "",
    };

    dispatch({ type: CREATE_FRIEND_REQUEST });

    axios
      .post(`/user/subscribe/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_FRIEND_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({ type: CREATE_FRIEND_FAIL, payload: message });
        onError(message);
      });
  };

export const updateFRIENDSubscription =
  (form, FRIENDSubscriptionId) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      FRIENDSubscriptionId: form.FRIENDSubscriptionId || "",
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      FRIENDId: form.FRIENDId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.EndDate || "",
    };

    dispatch({ type: EDIT_FRIEND_REQUEST });

    axios
      .put(`/user/updateFRIENDSubscription/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_FRIEND_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({ type: CREATE_FRIEND_FAIL, payload: message });
        onError(message);
      });
  };

export const upgradeFRIENDSubscription =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      FRIENDSubscriptionId: form.FRIENDSubscriptionId || "",
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      FRIENDId: form.FRIENDId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.EndDate || "",
    };

    dispatch({ type: EDIT_FRIEND_REQUEST });

    axios
      .post(`/user/upgradeFRIENDSubscription/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_FRIEND_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({ type: CREATE_FRIEND_FAIL, payload: message });
        onError(message);
      });
  };
