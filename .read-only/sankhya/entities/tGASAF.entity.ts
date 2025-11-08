import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgadivEntity } from './tGADIV.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TgagtmEntity } from './tGAGTM.entity';
import { TgagtsEntity } from './tGAGTS.entity';
import { TgainsEntity } from './tGAINS.entity';
import { TgangrEntity } from './tGANGR.entity';
import { TgarecEntity } from './tGAREC.entity';
import { TgariEntity } from './tGARI.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGASAF', ['codsaf'], { unique: true })
@Entity('TGASAF', { schema: 'SANKHYA' })
export class TgasafEntity {
  @Column('int', { primary: true, name: 'CODSAF' })
  codsaf: number;

  @Column('char', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('datetime', { name: 'DTINICIO', default: () => 'getdate()' })
  dtinicio: Date;

  @Column('varchar', { name: 'APELIDO', nullable: true, length: 15 })
  apelido: string | null;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'A'" })
  status: string;

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codsaf)
  tcscons: TcsconEntity[];

  @OneToMany(() => TgaculEntity, (tgaculEntity) => tgaculEntity.codsaf2)
  tgaculs: TgaculEntity[];

  @OneToMany(() => TgadivEntity, (tgadivEntity) => tgadivEntity.codsaf2)
  tgadivs: TgadivEntity[];

  @OneToMany(() => TgagarEntity, (tgagarEntity) => tgagarEntity.codsaf)
  tgagars: TgagarEntity[];

  @OneToMany(() => TgagtmEntity, (tgagtmEntity) => tgagtmEntity.codsaf2)
  tgagtms: TgagtmEntity[];

  @OneToMany(() => TgagtsEntity, (tgagtsEntity) => tgagtsEntity.codsaf2)
  tgagts: TgagtsEntity[];

  @OneToMany(() => TgainsEntity, (tgainsEntity) => tgainsEntity.codsaf2)
  tgains: TgainsEntity[];

  @OneToMany(() => TgangrEntity, (tgangrEntity) => tgangrEntity.codsaf)
  tgangrs: TgangrEntity[];

  @OneToMany(() => TgarecEntity, (tgarecEntity) => tgarecEntity.codsaf2)
  tgarecs: TgarecEntity[];

  @OneToMany(() => TgariEntity, (tgariEntity) => tgariEntity.codsaf2)
  tgaris: TgariEntity[];

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codsaf)
  tgfcabs: TgfcabEntity[];
}
