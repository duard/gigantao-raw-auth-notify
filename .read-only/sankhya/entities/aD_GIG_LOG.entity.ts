import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__AD_GIG_L__3214EC2799E2AA5D', ['id'], { unique: true })
@Entity('AD_GIG_LOG', { schema: 'SANKHYA' })
export class AdGigLogEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'ACAO', nullable: true, length: 50 })
  acao: string | null;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 50 })
  tabela: string | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'NOMEUSU', nullable: true, length: 50 })
  nomeusu: string | null;

  @Column('nvarchar', { name: 'CAMPOS_ALTERADOS', nullable: true })
  camposAlterados: string | null;

  @Column('nvarchar', { name: 'VERSAO_NOVA', nullable: true })
  versaoNova: string | null;

  @Column('nvarchar', { name: 'VERSAO_ANTIGA', nullable: true })
  versaoAntiga: string | null;

  @Column('datetime', {
    name: 'DTCREATED',
    nullable: true,
    default: () => 'getdate()',
  })
  dtcreated: Date | null;
}
