import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsidsbEntity } from './tSIDSB.entity';
import { TsigbiEntity } from './tSIGBI.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigelEntity } from './tSIGEL.entity';
import { TsitvpEntity } from './tSITVP.entity';

@Index('PK_TSIGDG', ['nugdg'], { unique: true })
@Entity('TSIGDG', { schema: 'SANKHYA' })
export class TsigdgEntity {
  @Column('int', { primary: true, name: 'NUGDG' })
  nugdg: number;

  @Column('varchar', { name: 'TITULO', length: 100 })
  titulo: string;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('varchar', { name: 'CATEGORIA', nullable: true, length: 50 })
  categoria: string | null;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'URLCOMPONENTE', nullable: true, length: 100 })
  urlcomponente: string | null;

  @Column('image', { name: 'THUMBNAIL', nullable: true })
  thumbnail: Buffer | null;

  @Column('image', { name: 'HTML5', nullable: true })
  html5: Buffer | null;

  @Column('char', {
    name: 'LAYOUT',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  layout: string | null;

  @Column('char', {
    name: 'GDGASSINADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  gdgassinado: string | null;

  @Column('varchar', { name: 'EVOCARD', nullable: true, length: 10 })
  evocard: string | null;

  @Column('varchar', { name: 'APVNC', nullable: true, length: 1 })
  apvnc: string | null;

  @ManyToMany(() => TsidsbEntity, (tsidsbEntity) => tsidsbEntity.tsigdgs)
  tsidsbs: TsidsbEntity[];

  @OneToMany(() => TsigbiEntity, (tsigbiEntity) => tsigbiEntity.nugdg)
  tsigbis: TsigbiEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsigdgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsigdgs2)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @OneToMany(() => TsigelEntity, (tsigelEntity) => tsigelEntity.nugdg2)
  tsigels: TsigelEntity[];

  @OneToMany(() => TsitvpEntity, (tsitvpEntity) => tsitvpEntity.nugdg)
  tsitvps: TsitvpEntity[];
}
