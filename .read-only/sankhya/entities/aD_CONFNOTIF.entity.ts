import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_CONFNOTIF', ['idconf'], { unique: true })
@Entity('AD_CONFNOTIF', { schema: 'SANKHYA' })
export class AdConfnotifEntity {
  @Column('int', { primary: true, name: 'IDCONF' })
  idconf: number;

  @Column('varchar', { name: 'ASSUNTO', nullable: true, length: 100 })
  assunto: string | null;

  @Column('text', { name: 'MENSAGEM', nullable: true })
  mensagem: string | null;

  @Column('int', { name: 'DIASNOTIFICACAO', nullable: true })
  diasnotificacao: number | null;
}
