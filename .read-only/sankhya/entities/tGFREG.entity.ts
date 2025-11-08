import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcerEntity } from './tGFCER.entity';
import { TgfitrEntity } from './tGFITR.entity';

@Index('PK_TGFREG', ['codregra'], { unique: true })
@Entity('TGFREG', { schema: 'SANKHYA' })
export class TgfregEntity {
  @Column('int', { primary: true, name: 'CODREGRA' })
  codregra: number;

  @Column('varchar', { name: 'DESCRREGRA', length: 60 })
  descrregra: string;

  @Column('varchar', { name: 'INSTPRINC', length: 30 })
  instprinc: string;

  @Column('varchar', { name: 'INSTSEC', nullable: true, length: 30 })
  instsec: string | null;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TgfcerEntity, (tgfcerEntity) => tgfcerEntity.codregra2)
  tgfcers: TgfcerEntity[];

  @OneToMany(() => TgfitrEntity, (tgfitrEntity) => tgfitrEntity.codregra2)
  tgfitrs: TgfitrEntity[];
}
