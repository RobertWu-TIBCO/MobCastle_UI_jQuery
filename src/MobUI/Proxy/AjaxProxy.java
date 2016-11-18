package MobUI.Proxy;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/AjaxProxy")
// 太坑爹了！！
public class AjaxProxy extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private void process(HttpServletRequest req, HttpServletResponse resp)
			throws MalformedURLException, IOException {
		String con_url = "http://localhost:9990/";
		Map<String, String[]> param_map = req.getParameterMap();
		// String[] 很关键，如果写错，后面就报错
		String parameterStr = "request="+req.getParameter("request");
		// 之后，所有变长参数都在这个名为parameterMap的Map里面了。
		// 只需要遍历一下这个Map就可以了。
		/*
		for (String key : param_map.keySet()) {
			parameterStr += key + "=" + param_map.get(key)[0];
		}
		*/
		URL url2 = new URL(con_url);
		HttpURLConnection huc = (HttpURLConnection) url2.openConnection();// 打开连接

		// 设置连接属性
		huc.setDoInput(true);
		huc.setDoOutput(true);
		huc.setUseCaches(false);
		huc.setRequestMethod("POST");
		huc.setInstanceFollowRedirects(true);
		huc.setRequestProperty("Content-Type",
				"application/x-www-form-urlencoded");
		huc.connect();

		DataOutputStream out = new DataOutputStream(huc.getOutputStream());
		// 要上传的参数
		// String content = "par=" + URLEncoder.encode("ylx_Post+中正", "UTF_8");
		// 将要上传的内容写入流中
		out.writeBytes(parameterStr);
		System.out.print("param_map.toString() : \t " + param_map.toString()
				+ " \n request：  \t " + parameterStr + " \n con_url : \t "
				+ con_url);

		// huc.getOutputStream().write(parameterStr.getBytes("UTF-8"));

		// 取得页面输出,并设置页面编码及缓存设置
		// resp.setContentType(huc.getContentType());
		resp.setCharacterEncoding("GBK");
		resp.setContentType("application/json;charset=UTF-8");
		resp.setHeader("Cache-Control", huc.getHeaderField("Cache-Control"));
		resp.setHeader("Pragma", huc.getHeaderField("Pragma"));
		resp.setHeader("Expires", huc.getHeaderField("Expires"));
		OutputStream os = resp.getOutputStream();

		// 将目标servlet的输入流直接往页面输出
		InputStream targetIS = huc.getInputStream();
		int r;

		while ((r = targetIS.read()) != -1) {
			os.write(r);
		}

		targetIS.close();
		out.flush();
		out.close();
		os.flush();
		os.close();
		huc.disconnect();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		process(req, resp);
	}
	/*
	 * private JSONObject getJsonFromMap(Map<String, Object> map) throws
	 * JSONException { JSONObject jsonData = new JSONObject(); for (String key :
	 * map.keySet()) { Object value = map.get(key); if (value instanceof Map<?,
	 * ?>) { // value = getJsonFromMap((Map<String, Object>) value); }
	 * jsonData.put(key, value); } return jsonData; }
	 */
}
