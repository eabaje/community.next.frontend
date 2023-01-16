import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  EDIT_USER_FAIL,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USER_SUBSCRIPTION_BY_CRITERIA_REQUEST,
  GET_USER_SUBSCRIPTIONS_SUCCESS,
  GET_USER_SUBSCRIPTIONS_FAIL,
  GET_USER_SUBSCRIPTIONS_REQUEST,
  GET_COMPANYS_REQUEST,
  GET_COMPANYS_SUCCESS,
  GET_COMPANYS_FAIL,
  CREATE_USER_SUBSCRIPTION_REQUEST,
  CREATE_USER_SUBSCRIPTION_SUCCESS,
  CREATE_USER_SUBSCRIPTION_FAIL,
  EDIT_USER_SUBSCRIPTION_REQUEST,
  EDIT_USER_SUBSCRIPTION_SUCCESS,
  EDIT_USER_SUBSCRIPTION_FAIL,
  UPGRADE_USER_SUBSCRIPTION_REQUEST,
  UPGRADE_USER_SUBSCRIPTION_SUCCESS,
  UPGRADE_USER_SUBSCRIPTION_FAIL,
  EDIT_COMPANY_REQUEST,
  EDIT_COMPANY_SUCCESS,
  EDIT_COMPANY_FAIL,
  CREATE_COMPANY_REQUEST,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";
import UserService from "../../../services/user.service";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });

    const { data } = await UserService.getAllUser();

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_USERS_FAIL, payload: message });
  }
};

export const getUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });

    const { data } = await UserService.getUser(userId);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_USER_FAIL, payload: message });
  }
};

export const getUserByName = (name) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });

    const { data } = await UserService.getUserByName(name);

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_USERS_FAIL, payload: message });
  }
};

export const getAllUserByDate = (fromDate, toDate) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });

    const { data } = await UserService.getAllUserByDate(fromDate, toDate);

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_USERS_FAIL, payload: message });
  }
};

export const addUser = (form) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_USER_REQUEST,
    });

    const { data } = await UserService.addUser(form);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: CREATE_USER_FAIL, payload: message });
  }
};

export const editUser = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_USER_REQUEST,
    });

    const { data } = await UserService.updateUser(id, form);

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_USER_FAIL, payload: message });
  }
};

export const updateRole = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_USER_REQUEST,
    });

    const { data } = await UserService.updateRole(id, form);

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_USER_FAIL, payload: message });
  }
};

export const updateUserRole = (id, form) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_USER_REQUEST,
    });

    const { data } = await UserService.updateUserRole(id, form);

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: EDIT_USER_FAIL, payload: message });
  }
};

export const resetPassword =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({ type: CREATE_USER_REQUEST });

    axios
      .put(`/auth/reset`, form)

      .then((res) => {
        dispatch({
          type: CREATE_USER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: CREATE_USER_FAIL, payload: message });
        onError(message);
      });
  };

export const UploadUserFile =
  (file, refId, fileType, companyId, email, onUploadProgress) =>
  (dispatch) =>
  (onSuccess) =>
  (onError) => {
    // const formdata = new FormData();
    // formdata.append("PicUrl", picFile);
    // formdata.append("LicenseUrl", docFile);

    let formData = new FormData();
    //alert(referenceId);
    formData.append("UserId", refId);
    formData.append("FileType", fileType);
    formData.append("CompanyId", companyId);
    formData.append("Email", email);
    formData.append("file", file);

    dispatch({
      type: CREATE_USER_REQUEST,
    });
    axios
      .post("/user/updateFile", formData, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        onUploadProgress,
      })
      .then((res) => {
        dispatch({
          type: CREATE_USER_SUCCESS,
          payload: res.data,
        });

        onSuccess(res.data);
      })
      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;

        dispatch({
          type: CREATE_USER_FAIL,
          payload: message,
        });

        onError(message);
      });
  };

export const deleteUser = (userId) => async (dispatch) => {
  const requestPayload = {
    ProfileId: userId,
  };

  dispatch({ type: DELETE_USER_REQUEST });

  try {
    const { res } = await axios.delete(`/user/delete/${userId}`);

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: DELETE_USER_FAIL, payload: message });
  }
};

export const AddRelationInfo = (form) => async (dispatch) => {
  console.log("formvariable", form);
  dispatch({ type: CREATE_USER_REQUEST });

  try {
    const res = await axios.post(`/user/addRelation`, form);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: CREATE_USER_FAIL, payload: message });
  }
};

export const UpdateRelationInfo = (form) => async (dispatch) => {
  dispatch({ type: EDIT_USER_REQUEST });

  try {
    const res = await axios.post(`/user/updateRelation`, form);

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: EDIT_USER_FAIL, payload: message });
  }
};

// export const AddRelationInfo2 = async (form) => {
//   try {
//     const res = await axios.post(`/user/addRelation`, form);

//     return res.data;
//   } catch (error) {
//     const message = error.response ? error.response.data : CONNECTION_ERROR;

//     return message;
//   }
// };

export const AddRelationInfo2 = (form) => (onSuccess) => (onError) => {
  axios
    .post(`/user/addRelation`, form)
    .then((res) => {
      onSuccess(res.data);
    })

    .catch((error) => {
      const message = error.response ? error.response.data : CONNECTION_ERROR;

      onError(message);
    });
};
export const SearchRelationInfo = (form) => (onSuccess) => (onError) => {
  axios
    .post(`/user/getAllRelationByCriteria`, form)
    .then((res) => {
      onSuccess(res.data);
    })

    .catch((error) => {
      const message = error.response ? error.response.data : CONNECTION_ERROR;

      onError(message);
    });
};

export const GetAllRelationInfo = (userId) => async (dispatch) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });
  try {
    const res = await axios.get(`user/getAllRelation/${userId}`);

    dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_USERS_FAIL, payload: message });
  }
};

export const GetAllRelationInfo2 = async (userId, relationType) => {
  try {
    const res = await axios.get(
      `/user/getAllRelation/${userId}/${relationType}`
    );
    return res.data;
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    return message;
  }
};
export const GetAllRelationByCategory =
  (userId, categoryType) => async (dispatch) => {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    try {
      const res = await axios.get(
        `/user/getAllRelationByCategory/${userId}/${categoryType}`
      );
      console.log("getRelationData", res.data);
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data.data });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;

      dispatch({ type: GET_USERS_FAIL, payload: message });
    }
  };

export const GetAllRelationByCategory2 =
  (userId, categoryType) => (onSuccess) => (onError) => {
    axios
      .get(`/user/getAllRelationByCategory/${userId}/${categoryType}`)
      .then((res) => {
        onSuccess(res.data);
      })

      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;

        onError(message);
      });
  };
export const GetAllRelationByRelationType =
  (userId, relationType) => async (dispatch) => {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    try {
      const res = await axios.get(
        `/user/getAllRelationByRelationType/${userId}/${relationType}`
      );
      console.log("getRelationData", res.data);
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;

      dispatch({ type: GET_USERS_FAIL, payload: message });
    }
  };

export const GetAllRelationByLevel = async (userId, level, relationType) => {
  try {
    const res = await axios.get(
      `/user/getAllRelationByLevel/${userId}/${level}/${relationType}`
    );
    return res.data;
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    return message;
  }
};

export const GetRelationInfo = (userId, relationType) => async (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/user/getRelation/${userId}/${relationType}`
    );
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_USER_FAIL, payload: message });
  }
};

export const DeleteRelation = (relationId) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });

  try {
    const { res } = await axios.delete(`/user/deleteRelation/${relationId}`);

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: DELETE_USER_FAIL, payload: message });
  }
};

export const AddChildSibling = (form) => async (dispatch) => {
  dispatch({ type: CREATE_USER_REQUEST });

  try {
    const res = await axios.post(`/user/addChildOrSibling`, form);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: CREATE_USER_FAIL, payload: message });
  }
};

export const AddChildSibling2 = async (form) => {
  try {
    const res = await axios.post(`/user/addChildOrSibling`, form);

    return res.data;
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    return message;
  }
};

export const GetAllSchoolWorkInfo =
  (userId, relationType) => async (dispatch) => {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/getAllSchoolPlaceWork/${userId}/${relationType}/}`
      );
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_USERS_FAIL, payload: message });
    }
  };

export const GetAllSchoolWorkAction = async (userId, relationType) => {
  try {
    const res = await axios.get(
      `/user/getAllSchoolPlaceWork/${userId}/${relationType}/}`
    );
    return res.data;
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
  }
};

export const GetSchoolWorkInfo = (Id, relationType) => async (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/user/getSchoolPlaceWork/${Id}/${relationType}/}`
    );
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;
    dispatch({ type: GET_USER_FAIL, payload: message });
  }
};

export const AddSchoolPlaceWork = (form) => async (dispatch) => {
  console.log(`data`, form);

  dispatch({ type: CREATE_USER_REQUEST });

  try {
    const res = await axios.post(`/user/addSchoolplacework`, form);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: CREATE_USER_FAIL, payload: message });
  }
};

export const UpdateChildSibling = (form) => async (dispatch) => {
  dispatch({ type: EDIT_USER_REQUEST });

  try {
    const { res } = await axios.post(`/user/updateChildOrSibling`, form);

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: EDIT_USER_FAIL, payload: message });
  }
};

export const UpdateSchoolPlaceWork = (form) => async (dispatch) => {
  dispatch({ type: EDIT_USER_REQUEST });

  try {
    const { res } = await axios.post(`/user/updateSchoolPlaceWork`, form);

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message = error.response ? error.response.data : CONNECTION_ERROR;

    dispatch({ type: EDIT_USER_FAIL, payload: message });
  }
};

//Section  User Subscription

export const listUserSubscriptions =
  (criteria = null) =>
  (dispatch) =>
  (onSuccess) =>
  (onError) => {
    dispatch({
      type: GET_USER_SUBSCRIPTIONS_REQUEST,
    });

    axios
      .get(`/user/findAllUserSubscriptions/${criteria}`)
      .then((res) => {
        dispatch({ type: GET_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data });

        onSuccess(res.data);
      })
      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: GET_USER_SUBSCRIPTIONS_FAIL, payload: message });
        onError(message);
      });
  };

export const listUserSubscriptionByUserId =
  (userId) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({
      type: GET_USER_SUBSCRIPTIONS_REQUEST,
    });
    axios
      .get(`/user/findUserSubscription/${userId}`)
      .then((res) => {
        dispatch({ type: GET_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data });

        onSuccess(res.data);
        //  console.log(`res.data`, res.data);
      })
      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: GET_USER_SUBSCRIPTIONS_FAIL, payload: message });
        onError(message);
      });
  };

export const listUserSubscriptionByDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_USER_SUBSCRIPTIONS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/findAllUserSubscriptionsByDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_USER_SUBSCRIPTIONS_FAIL, payload: message });
    }
  };

export const listUserSubscriptionByStartDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_USER_SUBSCRIPTIONS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/findAllUserSubscriptionsByStartDate/${fromDate}/${endDate}/}`
      );
      dispatch({ type: GET_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_USER_SUBSCRIPTIONS_FAIL, payload: message });
    }
  };

export const listUserSubscriptionByEndDate =
  (fromDate, endDate) => async (dispatch) => {
    dispatch({
      type: GET_USER_SUBSCRIPTIONS_REQUEST,
    });
    try {
      const { res } = await axios.get(
        `/user/findAllUserSubscriptionsByEndDate/${fromDate}/${endDate}`
      );
      dispatch({ type: GET_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data });
    } catch (error) {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_USERS_FAIL, payload: message });
    }
  };

export const subcribeUser =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      UserId: form.UserId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.Phone || "",
    };

    dispatch({ type: CREATE_USER_SUBSCRIPTION_REQUEST });

    axios
      .post(`/user/subscribe/`, form)
      .then((res) => {
        dispatch({
          type: CREATE_USER_SUBSCRIPTION_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: CREATE_USER_SUBSCRIPTION_FAIL, payload: message });
        onError(message);
      });
  };

export const updateUserSubscription =
  (form, UserSubscriptionId) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      UserSubscriptionId: form.UserSubscriptionId || "",
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      UserId: form.UserId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.EndDate || "",
    };

    dispatch({ type: EDIT_USER_SUBSCRIPTION_REQUEST });

    axios
      .put(`/user/updateUserSubscription/`, form)
      .then((res) => {
        dispatch({
          type: EDIT_USER_SUBSCRIPTION_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: EDIT_USER_SUBSCRIPTION_FAIL, payload: message });
        onError(message);
      });
  };

export const upgradeUserSubscription =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      UserSubscriptionId: form.UserSubscriptionId || "",
      SubscriptionId: form.SubscriptionId || "",
      SubscriptionName: form.SubscriptionName || "",
      UserId: form.UserId || "",
      Active: form.Active ? true : false,
      StartDate: form.StartDate || "",
      EndDate: form.EndDate || "",
    };

    dispatch({ type: UPGRADE_USER_SUBSCRIPTION_REQUEST });

    axios
      .post(`/user/upgradeUserSubscription/`, form)
      .then((res) => {
        dispatch({
          type: UPGRADE_USER_SUBSCRIPTION_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: UPGRADE_USER_SUBSCRIPTION_FAIL, payload: message });
        onError(message);
      });
  };

////Section  Company

export const listCompanys = () => (dispatch) => (onSuccess) => (onError) => {
  dispatch({
    type: GET_COMPANYS_REQUEST,
  });
  axios
    .get(`/user/findAllCompanys/`)
    .then((res) => {
      dispatch({ type: GET_COMPANYS_SUCCESS, payload: res.data });
      console.log(`res.data`, res.data);
      onSuccess(res.data);
    })

    .catch((error) => {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_COMPANYS_FAIL, payload: message });
      onError(message);
    });
};

export const listCompanyByCompanyId =
  (companyId) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({
      type: GET_COMPANYS_REQUEST,
    });
    axios
      .get(`/user/findCompany/${companyId}`)
      .then((res) => {
        dispatch({ type: GET_COMPANYS_SUCCESS, payload: res.data });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: GET_COMPANYS_FAIL, payload: message });
        onError(message);
      });
  };

export const listCompanyByDate =
  (fromDate, endDate) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({
      type: GET_COMPANYS_REQUEST,
    });
    axios
      .get(`/user/findAllCompanysByDate/${fromDate}/${endDate}`)
      .then((res) => {
        dispatch({ type: GET_COMPANYS_SUCCESS, payload: res.data });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: GET_COMPANYS_FAIL, payload: message });
        onError(message);
      });
  };
export const addCompany = (form) => (dispatch) => (onSuccess) => (onError) => {
  // const requestPayload = {
  //   SubscriptionId: form.SubscriptionId || "",
  //   SubscriptionName: form.SubscriptionName || "",
  //   UserId: form.UserId || "",
  //   Active: form.Active ? true : false,
  //   StartDate: form.StartDate || "",
  //   EndDate: form.Phone || "",
  // };

  dispatch({ type: CREATE_COMPANY_REQUEST });

  axios
    .post(`/user/createCompany/`, form)
    .then((res) => {
      dispatch({
        type: CREATE_COMPANY_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })

    .catch((error) => {
      const message = error.response ? error.response.data : CONNECTION_ERROR;
      dispatch({ type: CREATE_COMPANY_FAIL, payload: message });
      onError(message);
    });
};
export const updateCompany =
  (form, CompanyId) => (dispatch) => (onSuccess) => (onError) => {
    // const requestPayload = {
    //   UserSubscriptionId: form.UserSubscriptionId || "",
    //   SubscriptionId: form.SubscriptionId || "",
    //   SubscriptionName: form.SubscriptionName || "",
    //   UserId: form.UserId || "",
    //   Active: form.Active ? true : false,
    //   StartDate: form.StartDate || "",
    //   EndDate: form.EndDate || "",
    // };

    dispatch({ type: EDIT_COMPANY_REQUEST });

    axios
      .put(`/user/updateCompany/${CompanyId}`, form)
      .then((res) => {
        dispatch({
          type: EDIT_COMPANY_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })

      .catch((error) => {
        const message = error.response ? error.response.data : CONNECTION_ERROR;
        dispatch({ type: EDIT_COMPANY_FAIL, payload: message });
        onError(message);
      });
  };

// Create User
