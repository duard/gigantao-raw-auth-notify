import { Column, Entity, Index } from 'typeorm';

@Index('PK__AD_GIGQU__6C2F933902374F13', ['sequencia'], { unique: true })
@Entity('AD_GIGQUESTIONARIOFUNCIONARIO', { schema: 'SANKHYA' })
export class AdGigquestionariofuncionarioEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}
