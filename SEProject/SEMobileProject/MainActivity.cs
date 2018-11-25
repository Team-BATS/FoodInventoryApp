using Android.App;
using Android.Widget;
using Android.OS;
using Android.Content;
using System.Collections.Generic;
using Android.Content.PM;
using Android.Provider;
using System;
using Android.Graphics;
using System.IO;

namespace SEMobileProject
{
    [Activity(Label = "SEMobileProject", MainLauncher = true)]
    public class MainActivity : Activity
    {

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.StartMenu);

            Button Login = FindViewById<Button>(Resource.Id.StartMenuLoginButton);
            Button BackTest = FindViewById<Button>(Resource.Id.BackTestButton);
            Button MyFridge = FindViewById<Button>(Resource.Id.MyFridgeButton);
            Button ViewMyFridge = FindViewById<Button>(Resource.Id.ViewMyFridge);
            Button EditMyFridge = FindViewById<Button>(Resource.Id.EditMyFridge);
            Button BackFromMyFridge = FindViewById<Button>(Resource.Id.BackFromMyFridgeMenu);

            Login.Click += Login_Click;
            MyFridge.Click += MyFridge_Click;
            ViewMyFridge.Click += ViewMyFridge_Click;
            EditMyFridge.Click += EditMyFridge_Click;

           // BackTest.Click += BackToLogin;
            //For some reason, this throws a NullReference error. 
            //Its just a testing button, so nothing to worry about at the moment
        }

        private void EditMyFridge_Click(object sender, EventArgs e)
        {
            SetContentView(Resource.Layout.EditMyFridge);
        }

        private void ViewMyFridge_Click(object sender, EventArgs e)
        {
            SetContentView(Resource.Layout.ViewMyFridge);
        }

        private void MyFridge_Click(object sender, EventArgs e)
        {
            SetContentView(Resource.Layout.UserFridgeMainMenu);
        }

        private void BackToLogin(object sender, EventArgs e)
        {
            SetContentView(Resource.Layout.StartMenu);

        }

        private void Login_Click(object sender, EventArgs e)
        {
            SetContentView(Resource.Layout.MainMenu);
        }
       
    }

    
}

