import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpgruperEntity } from './tFPGRUPER.entity';

@Index('PK_TFPTELASPERM', ['codperm', 'telaId', 'funcao'], { unique: true })
@Entity('TFPTELASPERM', { schema: 'SANKHYA' })
export class TfptelaspermEntity {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'CODPERM' })
  codperm: number;

  @Column('varchar', { name: 'TELA', nullable: true, length: 100 })
  tela: string | null;

  @Column('smallint', { primary: true, name: 'TELA_ID' })
  telaId: number;

  @Column('varchar', { primary: true, name: 'FUNCAO', length: 30 })
  funcao: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('varchar', { name: 'CLIPPING', nullable: true, length: 200 })
  clipping: string | null;

  @OneToMany(
    () => TfpgruperEntity,
    (tfpgruperEntity) => tfpgruperEntity.tfptelasperm,
  )
  tfpgrupers: TfpgruperEntity[];
}
