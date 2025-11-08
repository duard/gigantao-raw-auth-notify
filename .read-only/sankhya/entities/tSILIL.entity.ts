import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiildEntity } from './tSIILD.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSILIL', ['codlil'], { unique: true })
@Entity('TSILIL', { schema: 'SANKHYA' })
export class TsililEntity {
  @Column('int', { primary: true, name: 'CODLIL' })
  codlil: number;

  @Column('datetime', { name: 'DHEVENTO' })
  dhevento: Date;

  @Column('varchar', { name: 'EVENTO', nullable: true, length: 10 })
  evento: string | null;

  @Column('varchar', { name: 'TEMPOTOTAL', nullable: true, length: 10 })
  tempototal: string | null;

  @Column('varchar', { name: 'NOMEARQUIVO', length: 100 })
  nomearquivo: string;

  @Column('int', { name: 'TOTREG', nullable: true })
  totreg: number | null;

  @Column('int', { name: 'TOTREGPROC', nullable: true })
  totregproc: number | null;

  @Column('int', { name: 'TOTREJEITADO', nullable: true })
  totrejeitado: number | null;

  @Column('varchar', { name: 'ATUALIZAR', nullable: true, length: 100 })
  atualizar: string | null;

  @Column('varchar', { name: 'LOGFINAL', nullable: true, length: 100 })
  logfinal: string | null;

  @Column('varchar', { name: 'REGRAS', nullable: true, length: 100 })
  regras: string | null;

  @Column('int', { name: 'TOTATUALIZADO', nullable: true })
  totatualizado: number | null;

  @Column('varchar', { name: 'REGRAENDERECO', nullable: true, length: 100 })
  regraendereco: string | null;

  @OneToMany(() => TsiildEntity, (tsiildEntity) => tsiildEntity.codlil)
  tsiilds: TsiildEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilils)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
