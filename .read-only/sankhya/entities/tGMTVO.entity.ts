import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgmtraEntity } from './tGMTRA.entity';

@Index('PK_TGMTVO', ['nutvo'], { unique: true })
@Entity('TGMTVO', { schema: 'SANKHYA' })
export class TgmtvoEntity {
  @Column('int', { primary: true, name: 'NUTVO' })
  nutvo: number;

  @Column('datetime', { name: 'DHTRANSF' })
  dhtransf: Date;

  @Column('float', { name: 'VLRTRANSF', nullable: true, precision: 53 })
  vlrtransf: number | null;

  @Column('int', { name: 'CODMETA', nullable: true })
  codmeta: number | null;

  @OneToMany(() => TgmtraEntity, (tgmtraEntity) => tgmtraEntity.nutvo)
  tgmtras: TgmtraEntity[];
}
