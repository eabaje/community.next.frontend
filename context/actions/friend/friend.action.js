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
  GET_FRIEND_FAIL,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_REQUEST,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";

export const listFriends = () => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/friend/findAll/`);
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    const message = err.response ? err.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_FRIENDS_FAIL, payload: message });
  }
};
export const listFriendsByCompany =
  (companyId) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({
      type: GET_FRIENDS_REQUEST,
    });
    axios
      .get(`/friend/findAllFriendsByCompany/${companyId}`)
      .then((res) => {
        dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });

        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({
          type: GET_FRIENDS_FAIL,
          payload: message,
        });
        onError(message);
      });
  };

export const listFriendsById =
  (friendId) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({
      type: GET_FRIEND_REQUEST,
    });
    axios
      .get(`/friend/findOne/${friendId}`)
      .then((res) => {
        dispatch({ type: GET_FRIEND_SUCCESS, payload: res.data });
        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({ type: GET_FRIEND_FAIL, payload: message });
        onError(message);
      });
  };

export const listFriendsByFriendName = (friendName) => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/friend/findAllFriendsByFriendName/${friendName}`
    );
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    const message = err.response ? err.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_FRIENDS_FAIL, payload: message });
  }
};

export const listFriendsByVehicle = (vehicleId) => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/friend/findAllFriendsByVehicle/${vehicleId}`
    );
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    const message = err.response ? err.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_FRIENDS_FAIL, payload: message });
  }
};

export const listFriendsLicensed = () => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/friend/findAllFriendsLicensed/`);
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    const message = err.response ? err.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_FRIENDS_FAIL, payload: message });
  }
};

export const listFriendsByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/friend/findAllFriendsByDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
  } catch (err) {
    const message = err.response ? err.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_FRIENDS_FAIL, payload: message });
  }
};

export const createFriend1 = (form) => async (dispatch) => {
  const requestPayload = {
    CompanyId: form.CompanyId || "",
    FriendName: form.FriendName || "",
    Email: form.Email || "",
    Phone: form.Phone || "",
    Address: form.Address || "",
    City: form.City || "",
    Country: form.Country || "",
    Licensed: form.Licensed || "",
    LicenseUrl: form.LicenseUrl || "",
    Rating: form.Rating || "",
    FriendDocs: form.FriendDocs || "",
    PicUrl: form.PicUrl || null,
  };

  dispatch({ type: CREATE_FRIEND_REQUEST });

  try {
    const { res } = await axios.post(`/friend/create/`, form);

    dispatch({
      type: CREATE_FRIEND_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const message = err.response ? err.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_FRIEND_FAIL, payload: message });
  }
};

export const createFriend =
  (form, file1, file2) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      CompanyId: form.CompanyId || "",
      FriendName: form.FriendName || "",
      Email: form.Email || "",
      Phone: form.Phone || "",
      Address: form.Address || "",
      City: form.City || "",
      Country: form.Country || "",
      Licensed: form.Licensed || "",
      LicenseUrl: form.LicenseUrl || "",
      Rating: form.Rating || "",
      FriendDocs: form.FriendDocs || "",
      PicUrl: form.PicUrl || null,
    };

    // const formdata = new FormData();
    // formdata.append("PicUrl", picFile);
    // formdata.append("LicenseUrl", docFile);

    const data = new FormData();

    data.append("CompanyId", form.CompanyId);
    data.append("FriendName", form.FriendName);
    data.append("Email", form.Email);
    data.append("Phone", form.Phone);
    data.append("DOB", form.DOB);
    data.append("Address", form.Address);
    data.append("City", form.City);
    data.append("Region", form.Region);
    data.append("Country", form.Country);
    data.append("Licensed", form.Licensed);
    // data.append("filePicUrl", file1);
    // data.append("fileLicenseUrl", file2);
    if (file1 !== null) data.append("filePicUrl", file1);
    if (file2 !== null) data.append("fileLicenseUrl", file2);
    // console.log(`form-action`, data);
    dispatch({
      type: CREATE_FRIEND_REQUEST,
    });
    axios
      .post("/friend/create", data)
      .then((res) => {
        dispatch({
          type: CREATE_FRIEND_SUCCESS,
          payload: res.data,
        });

        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;

        dispatch({
          type: CREATE_FRIEND_FAIL,
          payload: message,
        });

        onError(message);
      });
  };

export const UploadFriendFile =
  (file, refId, fileType, companyId, email, onUploadProgress) =>
  (dispatch) =>
  (onSuccess) =>
  (onError) => {
    // const formdata = new FormData();
    // formdata.append("PicUrl", picFile);
    // formdata.append("LicenseUrl", docFile);

    let formData = new FormData();
    //alert(referenceId);
    formData.append("FriendId", refId);
    formData.append("FileType", fileType);
    formData.append("CompanyId", companyId);
    formData.append("Email", email);
    formData.append("file", file);

    dispatch({
      type: CREATE_FRIEND_REQUEST,
    });
    axios
      .post("/friend/updateFile", formData, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        onUploadProgress,
      })
      .then((res) => {
        dispatch({
          type: CREATE_FRIEND_SUCCESS,
          payload: res.data,
        });

        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;

        dispatch({
          type: CREATE_FRIEND_FAIL,
          payload: message,
        });

        onError(message);
      });
  };

export const editFriend =
  (form, friendId) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      CompanyId: form.CompanyId || "",
      FriendName: form.FriendName || "",
      Email: form.Email || "",
      Phone: form.Phone || "",
      Address: form.Address || "",
      City: form.City || "",
      Country: form.Country || "",
      Licensed: form.Licensed || "",
      LicenseUrl: form.LicenseUrl || "",
      Rating: form.Rating || "",
      FriendDocs: form.FriendDocs || "",
      PicUrl: form.PicUrl || null,
    };
    // console.log("requestPayload :>> ", form);
    let formData = new FormData();
    // if (file1 !== null) data.append("filePicUrl", file1);
    // if (file2 !== null) data.append("fileLicenseUrl", file2);
    // data.append("filePicUrl", file1);
    // data.append("fileLicenseUrl", file2);
    formData.append("FriendId", friendId);
    formData.append("CompanyId", form.CompanyId);
    formData.append("FriendName", form.FriendName);
    formData.append("Email", form.Email);
    formData.append("Phone", form.Phone);
    formData.append("DOB", form.DOB);
    formData.append("Address", form.Address);
    formData.append("City", form.City);
    formData.append("Region", form.Region);
    formData.append("Country", form.Country);
    formData.append("Licensed", form.Licensed);

    dispatch({
      type: EDIT_FRIEND_REQUEST,
    });

    axios
      .put(`/friend/update/${friendId}`, form)
      .then((res) => {
        dispatch({
          type: EDIT_FRIEND_SUCCESS,
          payload: res.data,
        });

        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({
          type: CREATE_FRIEND_FAIL,
          payload: message,
        });
        onError(message);
      });
  };

export const assignFriendToVehicle =
  (form, id) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      CompanyId: form.CompanyId || "",
      FriendName: form.FriendName || "",
      Email: form.Email || "",
      Phone: form.Phone || "",
      Address: form.Address || "",
      City: form.City || "",
      Country: form.Country || "",
      Licensed: form.Licensed || "",
      LicenseUrl: form.LicenseUrl || "",
      Rating: form.Rating || "",
      FriendDocs: form.FriendDocs || "",
      PicUrl: form.PicUrl || null,
    };

    //console.log("requestPayload :>> ", form);
    dispatch({
      type: CREATE_FRIEND_REQUEST,
    });

    axios
      .post(`/friend/AssignFriendToVehicle`, form)
      .then((res) => {
        dispatch({
          type: CREATE_FRIEND_SUCCESS,
          payload: res.data,
        });
        //  console.log("assignedResult", res.data);
      })
      .catch((err) => {
        // console.log("err", err.response);
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({
          type: CREATE_FRIEND_FAIL,
          payload: message,
        });
        onError(message);
      });
  };

export const deleteFriend = (friendId) => async (dispatch) => {
  dispatch({ type: DELETE_FRIEND_REQUEST });

  try {
    const { res } = await axios.delete(`/friend/delete/${friendId}`);

    dispatch({
      type: DELETE_FRIEND_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_FRIEND_FAIL, payload: message });
  }
};
