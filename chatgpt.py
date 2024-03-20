from flask import Flask, request
import requests

app = Flask(__name__)
app.debug = True
@app.route('/')
def abc():
    return "Api By Mon Leo Hay Khok Telegram @Monleohaykhok"
@app.route('/api')
def get_cookies():
        cookies = request.cookies
        cookies_dict = cookies.to_dict()
        filtered_cookies = {}
        keys_to_keep = ['__cflb', '_puid', 'oai-did', 'cf_clearance', '_cfuvid', 'ajs_anonymous_id', '__Secure-next-auth.session-token', 'ajs_user_id', '__cf_bm', '__Host-next-auth.csrf-token', '_dd_s']

        for key, value in cookies_dict.items():
            if key in keys_to_keep:
                filtered_cookies[key] = value

        headers = {
            'authority': 'https://chat.openai.com/',
            'cookie': '; '.join([f"{key}={value}" for key, value in filtered_cookies.items()]),
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
            'referer': 'https://chat.openai.com/',
            'sec-ch-ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
        }

        response = requests.get('https://chat.openai.com/api/auth/session', headers=headers)
        try:
            data = response.json()
            token = data.get('accessToken')
            mail = data.get('user' , {}).get('email', '')
            headers = {
            'authority': 'https://chat.openai.com/',
            'cookie': '; '.join([f"{key}={value}" for key, value in filtered_cookies.items()]),
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
            'referer': 'https://chat.openai.com/',
            'sec-ch-ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'authorization': f'Bearer {token}',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
        }
            response = requests.get('https://chat.openai.com/backend-api/accounts/check/v4-2023-04-27', headers=headers)
            data = response.json()
            try:
                accounts = data['accounts']
                for account_id, account_info in accounts.items():
                    entitlement = account_info['entitlement']
                    last_active_subscription = account_info['last_active_subscription']
                    subscription_plan = entitlement['subscription_plan']
                    expires_at = entitlement['expires_at']
                    has_active_subscription = entitlement['has_active_subscription']
                    purchase_origin_platform = last_active_subscription['purchase_origin_platform']
                if subscription_plan != "chatgptfreeplan" and has_active_subscription != False:
                    ketqua= f"HIT Email: {mail} Plan: {subscription_plan} Expried: {expires_at} Payment Method:{purchase_origin_platform} Config By MonLeoHayKhok"
                    return ketqua
                else:
                    return "BAD"

            except ValueError as e:
                print(f"Error parsing JSON: {e}")
        except ValueError as e:
            print(f"Error parsing JSON: {e}")

        return "Error retrieving data"
  
if __name__ == '__main__':
        app.run(host='0.0.0.0')
