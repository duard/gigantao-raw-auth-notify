import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GfrmetascategEntity } from './gFRMETASCATEG.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { GfrmetasvendEntity } from './gFRMETASVEND.entity';

@Index('PK_GFRMETASUNID', ['codmeta'], { unique: true })
@Index('UNQ_GFRMETASUNID_EMP_REF', ['codemp', 'referencia'], { unique: true })
@Entity('GFRMETASUNID', { schema: 'SANKHYA' })
export class GfrmetasunidEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODMETA' })
  codmeta: number;

  @Column('smallint', { name: 'CODEMP', unique: true })
  codemp: number;

  @Column('float', { name: 'META', precision: 53 })
  meta: number;

  @Column('datetime', {
    name: 'DATACRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  datacriacao: Date | null;

  @Column('datetime', { name: 'REFERENCIA', unique: true })
  referencia: Date;

  @Column('varchar', { name: 'TIPMETA', length: 1 })
  tipmeta: string;

  @OneToMany(
    () => GfrmetascategEntity,
    (gfrmetascategEntity) => gfrmetascategEntity.codmeta2,
  )
  gfrmetascategs: GfrmetascategEntity[];

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.gfrmetasuns)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => GfrmetasvendEntity,
    (gfrmetasvendEntity) => gfrmetasvendEntity.codmetaun,
  )
  gfrmetasvends: GfrmetasvendEntity[];
}
