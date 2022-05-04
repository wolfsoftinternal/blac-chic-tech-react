import * as Yup from "yup";
const FILE_SIZE = 5e8;
const SUPPORTED_FORMATS = "image/jpeg image/png image/gif";

const PHONEREGEXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ForgotPaswordSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
});
export const SignInSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Please enter minimum 6 letter")
    .required("Please enter your password"),
});
export const SignUpSchema = Yup.object({
  step_one: Yup.object({
    email: Yup.string()
      .email("Please enter valid email")
      .required("Please enter your email"),
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
    username: Yup.string().required("Please enter your user name"),
    password: Yup.string()
      .min(6, "Please enter minimum 6 letter")
      .required("Please enter your password"),
    month: Yup.string().required("Please select month"),
    day: Yup.string().required("Please select day"),
    year: Yup.string().required("Please select year"),
    country: Yup.string().required("Please select country"),
    state: Yup.string().required("Please select state"),
    city: Yup.string().required("Please select city"),
  }),
  step_two: Yup.object().shape({
    image: Yup.array()
      .of(
        Yup.mixed()
          .test(
            "fileSize",
            "File is too large or empty",
            (value) => value === null || (value && value.size <= FILE_SIZE)
          )
          .test(
            "fileFormat",
            "Unsupported file type",
            (value) =>
              value === null ||
              (value && SUPPORTED_FORMATS.includes(value.type))
          )
      )
      .min(1, "Please upload atleast one image")
      .required("Please provide atleast one image."),
  }),
  step_three: Yup.object().shape(
    {
      instagram: Yup.string()
        .url("Please enter a valid URL")
        .when(["linkedIn", "twitter"], {
          is: (linkedIn, twitter) => !linkedIn && !twitter,
          then: Yup.string().required("Please enter Instagram url"),
        }),
      twitter: Yup.string()
        .url("Please enter a valid URL")
        .when(["linkedIn", "instagram"], {
          is: (linkedIn, instagram) => !linkedIn && !instagram,
          then: Yup.string().required("Please enter Twitter url"),
        }),
      linkedIn: Yup.string()
        .url("Please enter a valid URL")
        .when(["instagram", "twitter"], {
          is: (instagram, twitter) => !instagram && !twitter,
          then: Yup.string().required("Please enter LinkedIn url"),
        }),
    },
    [
      ["linkedIn", "instagram"],
      ["linkedIn", "twitter"],
      ["instagram", "twitter"],
    ]
  ),
  step_four: Yup.object({
    current_job: Yup.object({
      title: Yup.string().required("Please enter title"),
      company_name: Yup.string().required("Please enter company name"),
    }),
    past_jobs: Yup.array().of(
      Yup.object({
        title: Yup.string().required("Please enter title"),
        company_name: Yup.string().required("Please enter company name"),
      })
    ),
  }),
  step_five: Yup.array().of(
    Yup.object({
      school_university: Yup.string().required("Please enter school name"),
      start_year: Yup.string().required("Please select start year"),
      end_year: Yup.string().required("Please select end year"),
    })
  ),
  step_six: Yup.array().of(
    Yup.object({
      answer: Yup.string().required("Please enter your answer"),
    })
  ),
  step_seven: Yup.object({
    answer: Yup.string().required("Please enter your answer"),
  }),
});
export const EditProfileSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
  first_name: Yup.string().required("Please enter your first name"),
  last_name: Yup.string().required("Please enter your last name"),
  username: Yup.string().required("Please enter your user name"),
  country: Yup.string().required("Please select country"),
  state: Yup.string().required("Please select state"),
  city: Yup.string().required("Please select city"),
});
export const PastJobsSchema = Yup.object({
  past_jobs: Yup.array().of(
    Yup.object({
      title: Yup.string().required("Please enter title"),
      company_name: Yup.string().required("Please enter company name"),
    })
  ),
});
export const EducationSchema = Yup.object({
  educations: Yup.array().of(
    Yup.object({
      school_university: Yup.string().required(
        "Please enter school/university name"
      ),
      start_year: Yup.string().required("Please select start year"),
      end_year: Yup.string().required("Please select end year"),
    })
  ),
});
export const CurrentJobSchema = Yup.object({
  current_job: Yup.object({
    title: Yup.string().required("Please enter title"),
    company_name: Yup.string().required("Please enter company name"),
  }),
  website: Yup.string().url("Please enter a valid URL"),
});
export const UrlSchema = Yup.object().shape(
  {
    instagram: Yup.string()
      .url("Please enter a valid URL")
      .when(["linkedIn", "twitter"], {
        is: (linkedIn, twitter) => !linkedIn && !twitter,
        then: Yup.string().required("Please enter Instagram url"),
      }),
    twitter: Yup.string()
      .url("Please enter a valid URL")
      .when(["linkedIn", "instagram"], {
        is: (linkedIn, instagram) => !linkedIn && !instagram,
        then: Yup.string().required("Please enter Twitter url"),
      }),
    linkedIn: Yup.string()
      .url("Please enter a valid URL")
      .when(["instagram", "twitter"], {
        is: (instagram, twitter) => !instagram && !twitter,
        then: Yup.string().required("Please enter LinkedIn url"),
      }),
  },
  [
    ["linkedIn", "instagram"],
    ["linkedIn", "twitter"],
    ["instagram", "twitter"],
  ]
);
export const VideoPostSchema = Yup.object().shape({
  caption: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Field is required."),
  video_file: Yup.mixed().required("Please upload any video."),
  topic: Yup.string().required("Please enter the video topic."),
  language: Yup.string().required("Please enter the video language."),
  duration: Yup.string().required("Please enter the video duration."),
  event_spoken: Yup.string().required("Please enter the name of events"),
});

//!NOT IN USE,JUST FOR REFERNCE
// export const ForgotSchema = Yup.object({
//   email: Yup.string()
//     .email("Please enter valid email")
//     .required("Please enter your email"),
// });
// export const PasswordSchema = Yup.object({
//   old_password: Yup.string().required("Please enter your password"),
//   new_password: Yup.string()
//     .min(6, "Please enter minimum 6 letter")
//     .max(50, "Your Password is too long!")
//     .required("Please enter your new password"),
//   confirm_password: Yup.string().oneOf(
//     [Yup.ref("new_password"), null],
//     "Password you entered is not matched"
//   ),
// });
// export const ResetSchema = Yup.object({
//   password: Yup.string()
//     .min(6, "Please enter minimum 6 letter")
//     .max(50, "Your Password is too long!")
//     .required("Please enter your password"),
//   confirm_password: Yup.string().oneOf(
//     [Yup.ref("password"), null],
//     "Password you entered is not matched"
//   ),
// });
// export const PersonalInfoSchema = Yup.object({
//   first_name: Yup.string().required("Please enter your firstname"),
//   last_name: Yup.string().required("Please enter your lastname"),
//   email: Yup.string()
//     .email("Please enter valid email")
//     .required("Please enter your email"),
//   phone_number: Yup.string()
//     .required("Please enter your phone number")
//     .matches(PHONEREGEXP, "Phone number you entered is not valid"),
//   password: Yup.string()
//     .min(6, "Please enter minimum 6 letter")
//     .max(50, "Your Password is too long!")
//     .required("Please enter your password"),
//   confirm_password: Yup.string().oneOf(
//     [Yup.ref("password"), null],
//     "Password you entered is not matched"
//   ),
// });
// export const StoreInfoSchema = Yup.object({
//   store_name: Yup.string().required("Please enter your store name"),
//   store_email: Yup.string()
//     .email("Please enter valid email")
//     .required("Please enter your store email"),
//   store_phone_number: Yup.string()
//     .required("Please enter your store number")
//     .matches(PHONEREGEXP, "Phone number you entered is not valid"),
// });

// export const AddressInfoSchema = Yup.object({
//   block_number: Yup.string().required("Please enter your block number"),
//   street: Yup.string().required("Please enter your street"),
//   landmark: Yup.string().required("Please enter your landmark"),
//   pincode: Yup.string().required("Please enter your pincode"),
//   city_id: Yup.string().required("Please provide your city"),
//   state_id: Yup.string().required("Please provide your state"),
//   country_id: Yup.string().required("Please provide your country"),
// });
// export const CommissionInfoSchema = Yup.object({
//   commission: Yup.string().required("Please provide commission"),
// });
// export const CategorySchema = Yup.object({
//   category_name: Yup.string().required("Please provide category name"),
//   image: Yup.mixed().required("Please provide category image"),
// });

// export const ProductSchema = Yup.object({
//   image: Yup.mixed().required("Please provide product image"),
//   category_id: Yup.string().required("Please select category"),
//   product_name: Yup.string().required("Please enter product name"),
//   product_description: Yup.string().required(
//     "Please provide product description"
//   ),
//   tags: Yup.array().of(Yup.string()).required("Please provide product tags"),
//   varients: Yup.array().of(
//     Yup.object({
//       unit: Yup.string().required("Please enter units"),
//       cost: Yup.string()
//         .required("Please enter cost")
//         .matches(/^[0-9.0-9]+$/, "Please enter only numbers"),
//       discount_price: Yup.string(),
//       sku: Yup.string().required("Please enter SKU"),
//       stock: Yup.string()
//         .required("Please enter stock")
//         .matches(/^[0-9.0-9]+$/, "Please enter only numbers"),
//     })
//   ),
// });

// export const ProfileSchema = Yup.object({
//   first_name: Yup.string().required("Please enter your first name"),
//   last_name: Yup.string().required("Please enter your last name"),
//   phone_number: Yup.string()
//     .required("Please enter your phone number")
//     .matches(PHONEREGEXP, "Phone number you entered is not valid"),
// });
// export const ManagerSchema = Yup.object({
//   login_id: Yup.string()
//     .email("Please enter valid email")
//     .required("Please enter signin email"),
//   name: Yup.string().required("Please enter manager name"),
//   password: Yup.string()
//     .min(6, "Please enter minimum 6 letter")
//     .max(50, "Your Password is too long!")
//     .required("Please enter your password"),
// });

// export const BankDetailsSchema = Yup.object().shape({
//   bank_name: Yup.string().required("Please enter your bank name"),
//   account_number: Yup.string().required("Please enter your account number"),
//   // .matches(/^[0-9]+$/, "Must be only digits"),
//   routing_number: Yup.string()
//     .required("Please enter routing number")
//     .matches(/^[0-9]+$/, "Please enter valid routing number"),
//   swift_code: Yup.string()
//     .required("Please enter swift code")
//     .matches(
//       /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
//       "Please enter valid swift code"
//     ),
// });
// export const AdvertisementSchema = Yup.object().shape({
//   store_id: "",
//   promotion_type: Yup.string().required("Please select any one"),
//   gender: Yup.array().of(Yup.string()).required("Please select any one"),
//   country_id: Yup.string().required("Please select Country"),
//   start_date: Yup.string().required("Please select start date"),
//   end_date: Yup.string().required("Please select end date"),
//   ads_option: Yup.string().required("Please select any one"),
// });
