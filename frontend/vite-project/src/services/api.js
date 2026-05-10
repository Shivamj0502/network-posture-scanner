const BASE_URL = "http://localhost:3000";

export const fetchDevices = async () => {

  const res = await fetch(`${BASE_URL}/devices`);

  return res.json();
};

export const fetchCIS = async () => {

  const res = await fetch(`${BASE_URL}/cis-results`);

  return res.json();
};

export const fetchFirewall = async () => {

  const res = await fetch(`${BASE_URL}/firewall-rules`);

  return res.json();
};


export const uploadDevicesToAWS = async () => {

  const res = await fetch(
    `${BASE_URL}/upload-devices`,
    {
      method: "POST"
    }
  );

  return res.json();
};