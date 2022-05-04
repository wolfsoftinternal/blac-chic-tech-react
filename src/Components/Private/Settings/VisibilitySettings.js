import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "../../../Store/Reducers/ProfileReducer";

function VisibilitySettings() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(({ Profile }) => Profile);
  async function submit(values) {
    try {
      dispatch(UpdateProfile(values));
    } catch (error) {}
  }
  useEffect(() => {
    if (userProfile) {
      console.log(userProfile);
    }
    return () => {};
  }, [userProfile]);
  return (
    <div class="tab-pane fade" id="tab2" role="tabpanel">
      <div className="incognito-wrapper">
        <div className="setting-content-box">
          <h5>Go Incognito</h5>
          <p>Hide yourself for a while</p>
          <div className="form-group">
            <input
              type="checkbox"
              checked={userProfile?.is_visible}
              onChange={(e) => {
                submit({ is_visible: e.target.checked ? 1 : 0 });
              }}
            />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisibilitySettings;
