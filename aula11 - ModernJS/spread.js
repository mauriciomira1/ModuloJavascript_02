const towns = ['Ceres', 'Gama', 'Morro Agudo', 'Nova Glória', 'Itapaci', 'Ceresópolis', 'Cocalzinho', 'Samambaia', 'Ceilondres']


const townsClone = [...towns]

townsClone.pop()
townsClone.pop()
townsClone.push('Rialma')


const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone, townsClone})