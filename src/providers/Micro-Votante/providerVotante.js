import { votanteAPI } from "./votanteConfig";

export const guardarLinkVotante = async ({
  curp,
  linkCredSelfieCrop,
  linkCredFrontalCrop,
  linkCredTraseraCrop,
}) => {
  // console.log("CURP", curp);
  try {
    const response1 = await votanteAPI.put(`credencial/votante/fotoFrente/${curp}`, {
      fotoFrente: linkCredFrontalCrop,
    });
    const response2 = await votanteAPI.put(`credencial/votante/fotoReverso/${curp}`, {
      fotoReverso: linkCredTraseraCrop,
    });
    const response3 = await votanteAPI.put(`votante/selfie/${curp}`, {
      foto: linkCredSelfieCrop,
    });

    return {
      ok2: true,
    };
  } catch (error) {
    return { ok2: false };
  }
};

export const verificarVotante = async ({ curp }) => {
  // console.log("CURP", curp);
  try {
    const data = await votanteAPI.put(`votante/validacion/${curp}`, {
      validacion: true,
    });

    console.log("VERI VOTANTE", data);

    return {
      ok3: true,
    };
  } catch (error) {
    return { ok3: false };
  }
};
export const getStatusValidacion = async (curp) => {
  // console.log("CURP", curp);
  try {
    const { data } = await votanteAPI.get(`status/${curp}`);

    // console.log("ESTÁ VALIDADO?", data);

    return {
      ok: true,
      data: data.data,
    };
  } catch (error) {
    return { ok: false };
  }
};

export const getProcesosDelVotante = async (curp) => {
  try {
    const { data } = await votanteAPI.get(`${curp}/jornadas_actuales`);

    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    console.log("error", error);
    return { ok: false };
  }
};

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
