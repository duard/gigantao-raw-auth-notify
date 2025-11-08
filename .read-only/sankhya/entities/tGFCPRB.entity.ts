import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfacprbEntity } from './tGFACPRB.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFCPRB', ['codcprb'], { unique: true })
@Entity('TGFCPRB', { schema: 'SANKHYA' })
export class TgfcprbEntity {
  @Column('datetime', { name: 'DTINICIAL', nullable: true })
  dtinicial: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('varchar', { primary: true, name: 'CODCPRB', length: 8 })
  codcprb: string;

  @Column('varchar', { name: 'DESCATIVIDADE', nullable: true, length: 200 })
  descatividade: string | null;

  @Column('varchar', { name: 'CODRECOLHIMENTO', nullable: true, length: 6 })
  codrecolhimento: string | null;

  @Column('float', { name: 'ALIQUOTA', nullable: true, precision: 53 })
  aliquota: number | null;

  @Column('int', { name: 'CODCTACTB', nullable: true })
  codctactb: number | null;

  @OneToMany(() => TgfacprbEntity, (tgfacprbEntity) => tgfacprbEntity.codcprb2)
  tgfacprbs: TgfacprbEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codcprb)
  tgfpros: TgfproEntity[];
}
