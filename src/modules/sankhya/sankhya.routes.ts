import { Hono } from 'hono';
import { getEmployeeDetails } from './tfpfun/tfpfun.service';

const sankhyaRoutes = new Hono();

sankhyaRoutes.get('/employee-details/:codEmp/:codFunc', async (c) => {
  const codEmp = Number(c.req.param('codEmp'));
  const codFunc = Number(c.req.param('codFunc'));
  const employeeDetails = await getEmployeeDetails(codEmp, codFunc);
  return c.json(employeeDetails);
});

export default sankhyaRoutes;
