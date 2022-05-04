import { Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icon } from "../../../Utilities/Icons";
import FormControl from "../../Common/Forms/FormControl";
import {
  Birthdate,
  CurrentJob,
  Education,
  Jobs,
  Question,
} from "../Profiles/ProfileModules";

function AboutSettings() {
  // const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);

  return (
    <div class="tab-pane fade" id="tab3" role="tabpanel">
      <div className="current-profile-wrapper">
        {/* Current Job To Add/Edit  */}
        <CurrentJob />
        {/* Past Job To Add/Edit  */}
        <Jobs />
        {/* Education To Add/Edit  */}
        <Education />
        {/* Date of birth To Add/Edit  */}
        <Birthdate />
        {/* Questions To Add/Edit  */}
        {userProfile?.questions.map((item, index) => (
          <React.Fragment key={index}>
            <Question item={item} />
          </React.Fragment>
        ))}
        {/* <div className="form-group submit">
            <input type="submit" value="SAVE CHANGES" />
          </div> */}
      </div>
    </div>
  );
}

export default AboutSettings;
