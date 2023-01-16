import React, { useState, useContext, useEffect, useRef } from "react";
//import { IMG_URL } from "../../../constants";
import { useForm, Controller } from "react-hook-form";

import { Country, State } from "country-state-city";

import { fetchData, fetchDataAll } from "../../../helpers/query";

import { GlobalContext } from "../../../context/Provider";
import {
  AddChildSibling,
  AddChildSibling2,
  AddRelationInfo2,
  GetAllRelationByLevel,
  GetAllRelationInfo,
  GetAllRelationInfo2,
  GetRelationInfo,
  SearchRelationInfo,
} from "../../../context/actions/user/user.action";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../../../components/button/customButton";
import ImageUpload from "../../../components/upload/uploadImage";
//import "../../../styles/form.module.css";
// import { SPECIALIZATION_TYPE } from "../../../constants/enum";
// import CustomPopup from "../../../components/popup/popup.component";
// import UpdateUserFileUpload from "../../../components/upload/edit-user-file-upload";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { RELATION_TYPE_2, RELATION_TYPE_3 } from "../../../constants/enum";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../helpers/axios";
import { selectProps } from "../../../helpers/selectProps";
import AutoSuggestInput from "../../formInput/autoSuggest.text";
import RelationService from "../../../services/relation.service";
import AutoSuggestTextInput from "../../formInput/query.text";
import { getAllRelationByCriteria } from "../../../context/actions/relation/relation.action";

const RelationForm = (props) => {
  const { userId } = props;

  // const isSingleMode = !userId;

  //***********State variables **************//

  const [profile, setProfile] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  // const isAddMode = !userId;

  const [email, setEmail] = useState("");

  const [picFile, setpicFile] = useState(null);
  const [docFile, setdocFile] = useState(null);

  const [level, setLevel] = useState("-1");
  const [relateType, setRelateType] = useState();

  const [query, setQuery] = useState();

  // *************** FORM FUNCTIONS**********//

  const {
    userDispatch,
    relationDispatch,
    userState: {
      Users: { data: relationData },
    },
    relationState: {
      Relations: { data: searchRelationData, error, loading },
    },
  } = useContext(GlobalContext);

  const {
    register,
    formState: { errors },
    setValue: setValue,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    //  setCountries((countries) => (countries = Country.getAllCountries()));
    GetAllRelationInfo(userId)(userDispatch);
  }, []);

  function onSubmit(formdata) {
    // console.log(`formdata`, formdata);
    // addChild(formdata);
    SearchRelations(formdata);
  }

  const SearchRelations = (formdata) => {
    getAllRelationByCriteria(formdata)(relationDispatch);
    error && toast.error(error.message);
  };

  // console.log("users", Users);

  return (
    <>
      <form class="account-setting-form" onSubmit={handleSubmit(onSubmit)}>
        <h6>
          {" "}
          To check if a relationship exist between two people. Kindly fill in
          the information below and click 'Check Relationship'
        </h6>
        <p className="row"></p>
        <input
          type="hidden"
          name="UserId"
          value={props.userId}
          className="form-control"
          {...register("UserId")}
        />

        <div class="row">
          {/* <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Person</label>
              <AutoSuggestInput
                name={`Person`}
                className={"form-control"}
                dataSource={hintData}
                {...register(`Person`)}
              />
            </div>
          </div> */}
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>FirstName</label>
              {/* <select
                name={`Person1`}
                className="form-select"
                {...register(`Person1`)}
              >
                <option value="">Name</option>
                {relationData?.data?.map((item) => (
                  <option
                    key={item?.RelationId}
                    value={`${item?.Level},${item?.RelationId}`}
                  >
                    {item?.LastName + " " + item?.FirstName}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                name={"FirstName"}
                placeholder="FirstName"
                className="form-control"
                {...register(`FirstName`)}
              />
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>LastName</label>

              <input
                type="text"
                name={"LastName"}
                placeholder="FirstName"
                className="form-control"
                {...register(`LastName`)}
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>NickName</label>
              <input
                type="text"
                placeholder="NickName"
                className="form-control"
                {...register(`NickName`)}
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="form-group">
              <label>Family Name</label>
              <input
                type="text"
                placeholder="Family Name"
                className="form-control"
                {...register(`FamilyName`)}
              />
            </div>
          </div>
          <>
            <input
              type="hidden"
              name={`Level`}
              value={level}
              className="form-control"
              {...register(`Level`)}
            />
          </>

          <div class="col-lg-12 col-md-12">
            <button type="submit" class="default-btn" disabled={loading}>
              {loading && <i className="fa fa-spinner fa-spin"></i>} Check
              Relationship
            </button>
          </div>
        </div>
      </form>
      {searchRelationData
        ? searchRelationData.map((relationItem) => (
            <>
              <div className="form-group row">
                <div className="col-md-12">
                  <h5 className="alert alert-info"> Pick Up Information </h5>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label"> Name</label>

                <div className="col-sm-4">
                  <label className=" col-form-label">
                    {relationItem?.FirstName + " " + relationItem?.LastName}
                  </label>
                </div>
                <label className="col-sm-2 col-form-label">NickName</label>

                <div className="col-sm-4">
                  <label className=" col-form-label">
                    {relationItem?.NickName}
                    {/* {shipmentInfo?.Specialization
                      ? SPECIALIZATION_TYPE.find(
                          (item) => item.value === shipmentInfo?.Specialization
                        ).text
                      : shipmentInfo?.Specialization} */}
                  </label>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Family Name</label>

                <div className="col-sm-2">
                  <label className=" col-form-label">
                    {relationItem?.Relation_Details["FamilyName"]}
                    {/* {shipmentInfo?.PickUpRegion
                      ? State.getStateByCodeAndCountry(
                          shipmentInfo?.PickUpRegion,
                          shipmentInfo?.PickUpCountry
                        ).name
                      : shipmentInfo?.PickUpRegion} */}
                  </label>
                </div>
                <label className="col-sm-2 col-form-label">Relationship</label>

                <div className="col-sm-2">
                  <label className=" col-form-label">
                    {relationItem?.RelationType}
                    {/* {shipmentInfo.PickUpCountry
                      ? Country.getCountryByCode(shipmentInfo.PickUpCountry)
                          .name
                      : shipmentInfo.PickUpCountry} */}
                  </label>
                </div>
              </div>
            </>
          ))
        : "Search found no result! "}
    </>
  );
};
//Login.layout = "main";

//export default AddEditProfile;

export default dynamic(() => Promise.resolve(RelationForm), { ssr: false });
