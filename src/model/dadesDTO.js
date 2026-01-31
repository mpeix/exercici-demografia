class DadesDTO {
  constructor(obj) {
    this.posicio = obj?.posicio || 0;
    this.cognom = obj?.cognom || '';
    this.dones = obj?.dones || 0;
    this.homes = obj?.homes || 0;
    this.total = obj?.total || 0;
  }
}

export default DadesDTO;
