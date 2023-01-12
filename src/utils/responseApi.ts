export const success = (message: String = 'Success', data: any = {}, code = 200) => {
  return {
    meta: {
      status: true,
      code,
      message
    },
    data
  }
}

export const fails = (message: String = 'Something went wrong', data: any = {}, code = 500) => {
  return {
    meta: {
      status: false,
      code,
      message
    },
    data
  }
}

export const validation = (message: String = 'Validation Errors', data: any = {}, code = 422) => {
  return {
    meta: {
      status: false,
      code,
      message
    },
    data
  }
}

export const notFound = (message: String = 'Data Not Found', data: any = {}, code = 404) => {
  return {
    meta: {
      status: false,
      code,
      message
    },
    data
  }
}
