import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpdpdEntity } from './tFPDPD.entity';

@Index('PK_TFPHDP', ['referencia', 'codemp', 'codfunc', 'sequencia'], {
  unique: true,
})
@Entity('TFPHDP', { schema: 'SANKHYA' })
export class TfphdpEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DEPENDIRF', nullable: true, length: 1 })
  dependirf: string | null;

  @Column('varchar', { name: 'SALFAM', nullable: true, length: 1 })
  salfam: string | null;

  @ManyToOne(() => TfpdpdEntity, (tfpdpdEntity) => tfpdpdEntity.tfphdps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tfpdpd: TfpdpdEntity;
}
