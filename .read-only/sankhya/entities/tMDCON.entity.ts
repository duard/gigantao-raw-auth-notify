import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';
import { TcshteEntity } from './tCSHTE.entity';
import { TcssdnEntity } from './tCSSDN.entity';
import { TmdperEntity } from './tMDPER.entity';
import { TmddmgEntity } from './tMDDMG.entity';
import { TmdfmgEntity } from './tMDFMG.entity';
import { TmdpreEntity } from './tMDPRE.entity';
import { TsidrfEntity } from './tSIDRF.entity';

@Index('PK_TMDCON', ['codcon'], { unique: true })
@Index('TMDCON_I01', ['ativo'], {})
@Entity('TMDCON', { schema: 'SANKHYA' })
export class TmdconEntity {
  @Column('int', { primary: true, name: 'CODCON' })
  codcon: number;

  @Column('varchar', { name: 'NOMECON', nullable: true, length: 40 })
  nomecon: string | null;

  @Column('char', { name: 'SENHA', nullable: true, length: 30 })
  senha: string | null;

  @Column('char', { name: 'CELULAR', nullable: true, length: 13 })
  celular: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('int', { name: 'CODPARC', nullable: true, default: () => '(0)' })
  codparc: number | null;

  @Column('int', { name: 'CODCONT', nullable: true, default: () => '(0)' })
  codcont: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true, default: () => '(0)' })
  codfunc: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true, default: () => '(0)' })
  codusu: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TcshteEntity, (tcshteEntity) => tcshteEntity.codcon2)
  tcshtes: TcshteEntity[];

  @OneToMany(() => TcssdnEntity, (tcssdnEntity) => tcssdnEntity.codcon)
  tcssdns: TcssdnEntity[];

  @ManyToMany(() => TmdperEntity, (tmdperEntity) => tmdperEntity.tmdcons)
  tmdpers: TmdperEntity[];

  @OneToMany(() => TmddmgEntity, (tmddmgEntity) => tmddmgEntity.codcon2)
  tmddmgs: TmddmgEntity[];

  @OneToMany(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.codcon2)
  tmdfmgs: TmdfmgEntity[];

  @OneToMany(() => TmdpreEntity, (tmdpreEntity) => tmdpreEntity.codcon2)
  tmdpres: TmdpreEntity[];

  @OneToMany(() => TsidrfEntity, (tsidrfEntity) => tsidrfEntity.codcon2)
  tsidrfs: TsidrfEntity[];
}
