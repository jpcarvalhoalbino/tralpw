import React, {useState , useEffect} from "react";

import "./styles.css";

function Home() {
  const [Periodo, setPerido] = useState('')
  const [Professor, setProfessor] = useState('')
  const [Disciplina, setDisciplina] = useState('')
  const [CargaHoraria, setCargaHoraria] = useState('')
  const [Acao, setAcao] = useState('')
 const [Things, setThings] = useState([])


  function handleAddPeriodo(event) {
    event.preventDefault();
    const data = {
      id: new Date().getTime(),
      Periodo,
      Professor,
      Disciplina,
      CargaHoraria,
      Acao
    }
  console.log(data)

  setThings([...Things,data])

  setPerido('')
  setProfessor('')
  setDisciplina('')
  setAcao('')
  setCargaHoraria('')
  }

  function handleDelete(id) {
    setThings(Things.filter(thing => thing.id !== id ))
  }

  useEffect(() =>{
    function loadData() {
      const storageThings = localStorage.getItem('@cadcthings:things')
      if (storageThings) {
        setThings(JSON.parse(storageThings))
      }
    }
    loadData()
  }, [])
  useEffect(() => {
    function saveData() {
      localStorage.setItem('@cadcthings:things', JSON.stringify(Things))
    }
    saveData()
  }, [Things])

  return (
    <div className="page">
      <form className="Periodo" onSubmit={handleAddPeriodo}>
      <select value={Periodo} onChange={(event)=> setPerido(event.target.value)}>
        <option disabled selected>
            Escolha Periodo
          </option>
          <option value = "1">1º Período</option>
          <option value = "2">2º Período</option>
          <option value = "3">3º Período</option>
          <option value = "4">4º Período</option>
          <option value = "5">5º Período</option>
          <option value = "6">6º Período</option>
          <option value = "7">7º Período</option>
          <option value = "8">8º Período</option>
        </select>
        <select value={Professor} onChange={(event)=> setProfessor(event.target.value)}>
        <option disabled selected>
            Escolha Professor
          </option>
          <option value = "luiz">luiz</option>
          <option value = "rita">rita</option>
          <option value = "tiago">tiago</option>
          <option value = "Débora">Débora</option>
          <option value = "Cadu">Cadu</option>
          <option value = "marcelo">marcelo</option>
        </select>
        <input
          name="Disciplina"
          type="text"
          placeholder="Digite sua Disciplina"
          value={Disciplina}
          onChange={(event) => setDisciplina(event.target.value)}
        />
        <input
          name="CargaHoraria"
          type="text"
          placeholder="Digite sua Carga Horaria"
          value={CargaHoraria}
          onChange={(event) => setCargaHoraria(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Periodo</th>
            <th>Professor(a)</th>
            <th>Disciplina</th>
            <th colSpan={1}>CargaHoraria</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {Things.map(thing => (
            <tr key={thing.id}>
              <td>{thing.Periodo}</td>
              <td>{thing.Professor}</td>
              <td>{thing.Disciplina}</td>
              <td>{thing.CargaHoraria}</td>
              <td>{thing.Açao}
              <button
                className="Excluir"
                onClick={() => handleDelete(thing.id)}
                >
                Excluir
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Home };