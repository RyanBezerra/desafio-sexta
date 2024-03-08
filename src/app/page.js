import Input from "@/components/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <h1 className="text-3xl text-white font-bold">Formulário de Endereço</h1>
        <form>
          <div>
            <input id="cep" type="text" label="CEP"></input>
          </div>
        </form>
    </main>
  );
}
