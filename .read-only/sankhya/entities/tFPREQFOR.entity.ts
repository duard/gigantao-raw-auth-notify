import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpreqpkgEntity } from './tFPREQPKG.entity';

@Index('PK_TFPREQFOR', ['id'], { unique: true })
@Entity('TFPREQFOR', { schema: 'SANKHYA' })
export class TfpreqforEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('int', { name: 'CODFORM', nullable: true })
  codform: number | null;

  @Column('smallint', { name: 'PSEUDOCODFORM' })
  pseudocodform: number;

  @Column('varchar', { name: 'DESCRFORM', length: 3103 })
  descrform: string;

  @Column('image', { name: 'FORMULA' })
  formula: Buffer;

  @Column('image', { name: 'INDICE', nullable: true })
  indice: Buffer | null;

  @Column('smallint', { name: 'STATUS' })
  status: number;

  @Column('varchar', { name: 'JUSTREPROV', nullable: true, length: 3103 })
  justreprov: string | null;

  @Column('varchar', { name: 'JUSTIFICA', nullable: true, length: 3103 })
  justifica: string | null;

  @Column('varchar', { name: 'APROVJUR', nullable: true, length: 1 })
  aprovjur: string | null;

  @Column('varchar', { name: 'APROVTEC', nullable: true, length: 1 })
  aprovtec: string | null;

  @Column('image', { name: 'ANEXOS', nullable: true })
  anexos: Buffer | null;

  @Column('image', { name: 'OLDFORMULA', nullable: true })
  oldformula: Buffer | null;

  @Column('image', { name: 'OLDINDICE', nullable: true })
  oldindice: Buffer | null;

  @Column('datetime', { name: 'DTREQ', nullable: true })
  dtreq: Date | null;

  @ManyToOne(
    () => TfpreqpkgEntity,
    (tfpreqpkgEntity) => tfpreqpkgEntity.tfpreqfors,
  )
  @JoinColumn([{ name: 'REQPKG', referencedColumnName: 'id' }])
  reqpkg: TfpreqpkgEntity;
}
