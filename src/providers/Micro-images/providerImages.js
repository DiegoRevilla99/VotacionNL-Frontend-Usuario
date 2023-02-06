import { imagesAPI } from "./configImages";

export const subirImagenes = async ({ credFrontalCrop, credTraseraCrop, selfieCrop }) => {
	try {
		// await timeout(2000);

		const formData1 = new FormData();
		formData1.append("file", credFrontalCrop);

		const formData2 = new FormData();
		formData2.append("file", credTraseraCrop);

		const formData3 = new FormData();
		formData3.append("file", selfieCrop);

		const linkCredFrontalCrop = await imagesAPI.post("file/upload", formData1);
		const linkCredTraseraCrop = await imagesAPI.post("file/upload", formData2);
		const linkCredSelfieCrop = await imagesAPI.post("file/upload", formData3);

		console.log("LINKS", linkCredFrontalCrop, linkCredTraseraCrop, linkCredSelfieCrop);

		return {
			ok: true,
			linkCredFrontalCrop: linkCredFrontalCrop.data.link,
			linkCredTraseraCrop: linkCredTraseraCrop.data.link,
			linkCredSelfieCrop: linkCredSelfieCrop.data.link,
		};
	} catch (error) {
		return { ok: false };
	}
};
export const verificarCredencial = async ({
	linkCredFrontalCrop,
	linkCredTraseraCrop,
	linkCredSelfieCrop,
}) => {
	const uriCredFrontalCrop = encodeURIComponent(linkCredFrontalCrop);
	const uriCredTraseraCrop = encodeURIComponent(linkCredTraseraCrop);
	const uriCredSelfieCrop = encodeURIComponent(linkCredSelfieCrop);

	console.log("URIS", uriCredFrontalCrop, uriCredTraseraCrop, uriCredSelfieCrop);

	try {
		const url = `https://ms-bio.herokuapp.com/api/usuario?nombreUser=${uriCredSelfieCrop}&nombreUser2=${uriCredFrontalCrop}`;

		let okResp = false;
		let verif = false;

		const response = await fetch(url, {
			mode: "cors",
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("DATAA?", data);
				okResp = true;
				verif = data.data;
			})
			.catch((error) => {
				console.log("ERROR DE PETICIÓN", error);
				okResp = false;
				verif = data.data;
			});

		return {
			ok1: okResp,
			verificado: verif,
		};
	} catch (error) {
		return { ok1: false };
	}
};

const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
