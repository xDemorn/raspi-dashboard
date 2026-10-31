//server.js
import express from "express";
import si from "systeminformation";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const values = {
  'cpuCurrentSpeed': '*',
  'fullLoad': '*',
  'services': '*',
  'mem': 'total, used, free',
  'os': '*',
  // 'diskLayout': 'device, type, name, size',
  'networkInterfaces': 'iface, ip4, mac, default',
  'versions': 'apache, gcc, git, nginx, node,npm, postgresql, python3'
}

// Serve static files
// app.use(express.static('public'));

app.get("/api/system", async (req, res) => {
  const main = await si.get(values).catch(error => res.status(500).send(error));
  
  // only show the default network interface
  main.networkInterfaces = main.networkInterfaces.filter(iface => iface.default);

  // const diskInfo = await si.fsSize('/dev/nvme0n1').then(data => data.filter(disk => disk.mount === '/')).catch(error => res.status(500).send(error));
  // console.log(diskInfo);
  
  res.status(200).send(main);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});