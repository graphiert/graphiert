import { useState } from "react";
import { Button, Alert, Spinner } from "flowbite-react";

const ContactForm = () => {
  const [dataForm, setDataForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [success, setSuccess] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(2);
    try {
      const req = await fetch(
        `https://api.telegram.org/bot${atob(
          "NTE1NDgxNzI4ODpBQUVFUld5STNERU1YQ2syU2JDd1ZKNGpwUnJNSjZvSTVDOA==",
        )}/sendMessage`,
        {
          body: JSON.stringify({
            chat_id: 1708159796,
            parse_mode: "HTML",
            text: `<b>ADA PESAN BARU!</b>\n\n<b>Pengirim:</b> ${dataForm.nama}\n<b>Email:</b> ${dataForm.email}\n\n"${dataForm.pesan}"`,
          }),
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
        },
      );
      const res = await req.json();
      setSuccess(res.ok ? 1 : -1);
    } catch (e) {
      setSuccess(-1);
      setError(e.toString());
    }

    if (success === 1) {
      setDataForm({ nama: "", email: "", pesan: "" });
    }
    setTimeout(() => {
      setSuccess(0);
    }, 7000);
  };

  return (
    <div>
      <h3 className="text-2xl my-4 font-bold tracking-tight leading-none md:text-3xl dark:text-white text-center">Contact Me!</h3>
      <form className="container w-full lg:w-2/3 my-6 mx-auto" onSubmit={handleSubmit}>
        {success !== 0 && (
          <Alert
            color={success === 1 ? "green" : success === -1 ? "red" : "blue"}
          >
            {success !== 2 ? (
              <>
                <span className="font-bold">
                  {success === 1 ? "Berhasil " : "Gagal "}
                </span>
                mengirimkan pesan.
                {success === -1 && error && (
                  <>
                    <br />
                    <span className="font-bold">Error: </span>
                    {error}
                  </>
                )}
              </>
            ) : (
              "Sedang mencoba untuk mengirimkan pesan..."
            )}
          </Alert>
        )}
        <div className="my-6">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nama
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="Nama"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={dataForm.nama}
            onChange={(e) => setDataForm({ ...dataForm, nama: e.target.value })}
          />
        </div>
        <div className="my-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Alamat Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Alamat Email"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={dataForm.email}
            onChange={(e) =>
              setDataForm({ ...dataForm, email: e.target.value })
            }
          />
        </div>
        <div className="my-6">
          <label htmlFor="textarea-id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pesan
          </label>
          <textarea
            id="textarea-id"
            placeholder="Pesan"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={dataForm.pesan}
            onChange={(e) =>
              setDataForm({ ...dataForm, pesan: e.target.value })
            }
          ></textarea>
        </div>
        {success === 2 ? (
          <Button color="blue" disabled>
            <Spinner className="mr-2" size="4" color="white" />
            Kirim
          </Button>
        ) : success === 1 ? (
          <Button color="green" disabled>
            <i className="bi bi-check-circle mr-2"></i>Kirim
          </Button>
        ) : success === -1 ? (
          <Button color="red" disabled>
            <i className="bi bi-exclamation-circle mr-2"></i>Kirim
          </Button>
        ) : (
          <Button color="blue" type="submit">
            <i className="bi bi-send mr-2"></i>Kirim
          </Button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
