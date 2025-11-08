import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPIPO', ['codemp', 'dhimportacao'], { unique: true })
@Entity('TFPIPO', { schema: 'SANKHYA' })
export class TfpipoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DHIMPORTACAO' })
  dhimportacao: Date;

  @Column('varchar', { name: 'ARQUIVO', nullable: true, length: 250 })
  arquivo: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 60 })
  status: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpipos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
