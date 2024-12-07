import * as adobeXd from '/public/svg/skills/adobe-xd.svg';
import adobeaudition from '/public/svg/skills/adobeaudition.svg';
import afterEffects from '/public/svg/skills/after-effects.svg';
import angular from '/public/svg/skills/angular.svg';
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import blender from '/public/svg/skills/blender.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import bulma from '/public/svg/skills/bulma.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import capacitorjs from '/public/svg/skills/capacitorjs.svg';
import coffeescript from '/public/svg/skills/coffeescript.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import deno from '/public/svg/skills/deno.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import fastify from '/public/svg/skills/fastify.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import flutter from '/public/svg/skills/flutter.svg';
import gcp from '/public/svg/skills/gcp.svg';
import gimp from '/public/svg/skills/gimp.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import haxe from '/public/svg/skills/haxe.svg';
import html from '/public/svg/skills/html.svg';
import illustrator from '/public/svg/skills/illustrator.svg';
import ionic from '/public/svg/skills/ionic.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import julia from '/public/svg/skills/julia.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import lightroom from '/public/svg/skills/lightroom.svg';
import markdown from '/public/svg/skills/markdown.svg';
import materialui from '/public/svg/skills/materialui.svg';
import matlab from '/public/svg/skills/matlab.svg';
import memsql from '/public/svg/skills/memsql.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nginx from '/public/svg/skills/nginx.svg';
import numpy from '/public/svg/skills/numpy.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import opencv from '/public/svg/skills/opencv.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import php from '/public/svg/skills/php.svg';
import picsart from '/public/svg/skills/picsart.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import premierepro from '/public/svg/skills/premierepro.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import ruby from '/public/svg/skills/ruby.svg';
import selenium from '/public/svg/skills/selenium.svg';
import sketch from '/public/svg/skills/sketch.svg';
import strapi from '/public/svg/skills/strapi.svg';
import svelte from '/public/svg/skills/svelte.svg';
import swift from '/public/svg/skills/swift.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import typescript from '/public/svg/skills/typescript.svg';
import unity from '/public/svg/skills/unity.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';
import vuetifyjs from '/public/svg/skills/vuetifyjs.svg';
import webix from '/public/svg/skills/webix.svg';
import wolframalpha from '/public/svg/skills/wolframalpha.svg';
import wordpress from '/public/svg/skills/wordpress.svg';
import nodejs from '/public/svg/skills/nodejs.svg';
import nestjs from '/public/svg/skills/nestjs.svg';
import reactRouter from '/public/svg/skills/react-router.svg';
import websocket from '/public/svg/skills/websocket.svg';
import express from '/public/svg/skills/express.svg';
import postman from '/public/svg/skills/postman.svg';
import redis from '/public/svg/skills/redis.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'adobe audition':
      return adobeaudition;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'angular':
      return angular;
    case 'aws':
      return aws;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'c':
      return c;
    case 'c#':
      return csharp;
    case 'c++':
      return cplusplus;
    case 'canva':
      return canva;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'css':
      return css;
    case 'dart':
      return dart;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'docker':
      return docker;
    case 'express':
      return express;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'firebase':
      return firebase;
    case 'flutter':
      return flutter;
    case 'gcp':
      return gcp;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'go':
      return go;
    case 'graphql':
      return graphql;
    case 'haxe':
      return haxe;
    case 'html':
      return html;
    case 'illustrator':
      return illustrator;
    case 'ionic':
      return ionic;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'julia':
      return julia;
    case 'kotlin':
      return kotlin;
    case 'lightroom':
      return lightroom;
    case 'markdown':
      return markdown;
    case 'materialui':
      return materialui;
    case 'matlab':
      return matlab;
    case 'memsql':
      return memsql;
    case 'microsoft office':
      return microsoftoffice;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'nest js':
      return nestjs;
    case 'next js':
      return nextJS;
    case 'nginx':
      return nginx;
    case 'node js':
      return nodejs;
    case 'nuxt js':
      return nuxtJS;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'photoshop':
      return photoshop;
    case 'php':
      return php;
    case 'picsart':
      return picsart;
    case 'postgresql':
      return postgresql;
    case 'premiere pro':
      return premierepro;
    case 'python':
      return python;
    case 'pytorch':
      return pytorch;
    case 'postman':
      return postman;
    case 'react':
      return react;
    case 'redis':
      return redis;
    case 'react router':
      return reactRouter;
    case 'ruby':
      return ruby;
    case 'selenium':
      return selenium;
    case 'sketch':
      return sketch;
    case 'strapi':
      return strapi;
    case 'svelte':
      return svelte;
    case 'swift':
      return swift;
    case 'tailwind':
      return tailwind;
    case 'tensorflow':
      return tensorflow;
    case 'typescript':
      return typescript;
    case 'unity':
      return unity;
    case 'vitejs':
      return vitejs;
    case 'vue':
      return vue;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'webix':
      return webix;
    case 'wolframalpha':
      return wolframalpha;
    case 'wordpress':
      return wordpress;
    case 'websocket':
      return websocket;
    default:
      break;
  }
}
