import 'reflect-metadata';
import run from './server';

import { locale } from './locale';
import { env } from './enviroments';


env();
locale();

run();
