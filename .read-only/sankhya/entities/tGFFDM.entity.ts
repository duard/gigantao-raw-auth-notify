import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgftpvEntity } from './tGFTPV.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TGFFDM', ['codform'], { unique: true })
@Entity('TGFFDM', { schema: 'SANKHYA' })
export class TgffdmEntity {
  @Column('int', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('char', { name: 'DESCRFORM', nullable: true, length: 40 })
  descrform: string | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @OneToMany(() => TgftpvEntity, (tgftpvEntity) => tgftpvEntity.codformdescmax)
  tgftpvs: TgftpvEntity[];

  @OneToMany(
    () => TgftpvEntity,
    (tgftpvEntity) => tgftpvEntity.codformdescmaxitens,
  )
  tgftpvs2: TgftpvEntity[];

  @OneToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.codformflex)
  tgfvens: TgfvenEntity[];
}
